import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { setCurrentView, setSelectedEvent } from '../actions';

import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableHead  from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Icon from '@material-ui/core/Icon';

import Card from '../components/Card.jsx';
import CardHeader from '../components/CardHeader';
import CardBody from '../components/CardBody';
import Button from '../components/Button.jsx';

import newOrdersListStyle from '../assets/jss/components/newOrdersListStyle.jsx';

const NewOrdersList = ({...props}) => {

    const { classes, orders, setSelectedEvent, setCurrentView } = props;


    const showEventOrders = e => {
        const eventCode = e.target.dataset.code;
        setSelectedEvent(eventCode);
        setCurrentView("EventOrdersView");
    }

    const newOrders = [];

    _.forEach(orders, (value, key) => {
        const order = {
            code: key,
            ...value
        };
        newOrders.push(order);
    });
    
    let totalBookings = _.sumBy(newOrders, (o) => o.bookings);
    let totalRevenu = _.sumBy(newOrders, (o) => o.revenue);

    const tableHeader = ["PCODE","EVENT NAME", "BOOKINGS", "TOTAL", ""];
    return (
        <Card>
            <CardHeader color="success">
                <h4 className={classes.tableTitle}>TODAY'S BOOKINGS FOR YOUR SELECTED EVENTS</h4>
                <p className={classes.tableSubtitle}>
                    Total Bookings: {totalBookings}<br />
                    Total Revenue: ${totalRevenu.toFixed(2)}
                </p>
            </CardHeader>
            <CardBody>
                <Table className={classes.orderList}>
                    <TableHead>
                        <TableRow>
                            {tableHeader.map(col => (<TableCell key={col}>{col}</TableCell>))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {newOrders.map(order => (
                        <TableRow key={order.code}>
                                <TableCell>{order.code}</TableCell>
                                <TableCell className={classes.eventName}>{order.name}</TableCell>
                                <TableCell>{order.bookings}</TableCell>
                                <TableCell>{order.revenue.toFixed(2)}</TableCell>
                                <TableCell>
                                    <Button size="sm" color="success" className={classes.actionButton}>
                                        <Icon data-code={order.code} onClick={showEventOrders}>
                                            bar_chart
                                        </Icon>
                                    </Button>
                                </TableCell>
                        </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </CardBody>
        </Card>
    );
}


NewOrdersList.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapDispatchToProps = {
    setCurrentView,
    setSelectedEvent
};

export default connect(
    null,
    mapDispatchToProps
)(withStyles(newOrdersListStyle)(NewOrdersList));