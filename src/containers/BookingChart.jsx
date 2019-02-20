import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Chartist from 'chartist';
import ChartistGraph from "react-chartist";

import withStyles from '@material-ui/core/styles/withStyles';
import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import CardBody from '../components/CardBody';
import CardFooter from '../components/CardFooter';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import bookingChartStyle from '../assets/jss/components/bookingChartStyle';

const BookingChart = ({ ...props }) => {

    const { classes, eventOrders, color, dataType, chartType } = props;

    // construct chart data
    const labels = [];
    const data = [];
    _.forEach(eventOrders.dailyOrders, value => labels.push(_.keys(value)));

    if (dataType === "bookings") {
        _.forEach(eventOrders.dailyOrders, value => data.push(value[Object.keys(value)[0]].bookings));
    }
    else if (dataType === "revenue") {
        _.forEach(eventOrders.dailyOrders, value => data.push(value[Object.keys(value)[0]].revenue));
    }

    const gridData = [];
    labels.forEach((value, key) => {
        gridData.push({ [value]: data[key] });
    });

    // chart styles
    const labelOffset = dataType === "revenue" ? 0 : -10;
    const chartName = dataType === "revenue" ? "Daily Revenue ($)" : "Daily Bookings";
    const tableHeader = dataType === "revenue" ? ["Day", "Revenue"] : ["Day", "Bookings"];
    const total = dataType === "revenue" ? `$ ${eventOrders.totalRevenue}` : eventOrders.totalBookings;
    const delays = 80, durations = 500;
    const dailySalesChart = {
        data: {
            labels: labels,
            series: [data]
        },
        options: {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: _.min(data),
            high: _.max(data) * 1.2 === 0 ? 1000 : _.max(data) * 1.2,
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            axisY: {
                onlyInteger: true
            },
            axisX: {
                labelOffset: {
                    x: labelOffset,
                    y: 0
                }
            }
        },
        // for animation
        animation: {
            draw: function (data) {
                if (data.type === "line" || data.type === "area") {
                    data.element.animate({
                        d: {
                            begin: 600,
                            dur: 700,
                            from: data.path
                                .clone()
                                .scale(1, 0)
                                .translate(0, data.chartRect.height())
                                .stringify(),
                            to: data.path.clone().stringify(),
                            easing: Chartist.Svg.Easing.easeOutQuint
                        }
                    });
                } else if (data.type === "point") {
                    data.element.animate({
                        opacity: {
                            begin: (data.index + 1) * delays,
                            dur: durations,
                            from: 0,
                            to: 1,
                            easing: "ease"
                        }
                    });
                }
            }
        }
    };

    return (
        <Fragment>
            <h5>{chartName}</h5>
            <Card chart>
                <CardHeader color={color}>
                    <ChartistGraph
                        className="ct-chart"
                        data={dailySalesChart.data}
                        type={chartType}
                        options={dailySalesChart.options}
                        listener={dailySalesChart.animation}
                    />
                </CardHeader>
                <CardBody className={classes.dataGrid}>
                    <Table className={classes.data}>
                        <TableHead>
                            <TableRow>
                                {tableHeader.map(col => (<TableCell key={col}>{col}</TableCell>))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {gridData.map(data => (
                                <TableRow key={_.keys(data)[0]}>
                                    <TableCell>{_.keys(data)[0]}</TableCell>
                                    <TableCell>{data[_.keys(data)[0]]}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell>TOTAL: {total}</TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </CardBody>
                <CardFooter chart>
                    <div className={classes.stats}>
                        updated 4 minutes ago
                    </div>
                </CardFooter>
            </Card>
        </Fragment>
    );
}

BookingChart.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    timeRange: state.timeRange
});

export default connect(
    mapStateToProps
)(withStyles(bookingChartStyle)(BookingChart));