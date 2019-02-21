import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { setCurrentView, setDateRange, loadEventOrders } from '../actions';
import moment from 'moment-timezone';

import withStyles from '@material-ui/core/styles/withStyles';
import Icon from '@material-ui/core/Icon';
import Slide from '@material-ui/core/Slide';
import Select from '@material-ui/core/Select';
import MenuItem from "@material-ui/core/MenuItem";
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import BookingChart from '../containers/BookingChart';
import Button from '../components/Button';

import eventOrdersViewStyle from '../assets/jss/views/eventOrdersViewStyle.jsx';

class EventOrdersView extends Component {

    componentWillMount() {
        /* eslint-disable no-undef */
        const { selectedEvent, loadEventOrders, dateRange } = this.props;
        if (selectedEvent !== "") {
            loadEventOrders(dateRange, selectedEvent);
        }
    }

    render() {
        const updateCurrentView = e => {
            const { setCurrentView } = this.props;
            e.preventDefault();
            setCurrentView("NewOrdersView");
        }

        const updateRange = e => {
            const { loadEventOrders } = this.props;
            const value = +e.target.closest("button").dataset.value;
            let range = dateRange.range;
            range = range + value > 0 ? range + value : 0;
            const newDateRange = { range, dateRangeSelector: dateRange.dateRangeSelector };

            loadEventOrders(newDateRange, selectedEvent);
        };

        const updagteDateRangeSelector = e => {
            const { loadEventOrders } = this.props;
            const dateRangeSelector = e.target.value;
            const newDateRange = { "range": 0, dateRangeSelector };

            loadEventOrders(newDateRange, selectedEvent);
        };

        const {
            classes,
            selectedEvent,
            eventOrders,
            dateRange
        } = this.props;

        const dateFrom = dateRange.dateRangeSelector === "week"
            ? moment().startOf('isoWeek').subtract(dateRange.range, 'weeks').format("YYYY-MM-DD")
            : moment().startOf('month').subtract(dateRange.range, 'months').format("YYYY-MM-DD");

        const dateEnd = dateRange.dateRangeSelector === "week"
            ? moment(dateFrom).add(6, "days").format("YYYY-MM-DD")
            : moment(dateFrom).add(moment(dateFrom).daysInMonth() - 1, "days").format("YYYY-MM-DD");

        return (
            <Slide direction="left" in>
                <div className={classes.eventOrdersView}>
                    <Button className={classes.backButton} color="success" onClick={updateCurrentView}>
                        <Icon>arrow_back</Icon>
                    </Button>
                    <div className={classes.eventOrders}>
                        <Typography variant="h6" className={classes.eventCode}>
                            {eventOrders.orders[0].eventCode}</Typography>
                        <Typography variant="subtitle1" className={classes.eventName}>{eventOrders.orders[0].eventName}</Typography>
                        <Typography variant="body1">From: {dateFrom.toString()}  To: {dateEnd.toString()}</Typography>
                        <div className={classes.searchBar}>
                            <Button size="sm" color="white" data-value="1" onClick={updateRange}><Icon>keyboard_arrow_left</Icon></Button>
                            <Select value={dateRange.dateRangeSelector}
                                onChange={updagteDateRangeSelector}
                                className={classes.dateRangeSelector}
                                input={
                                    <Input
                                        classes={{
                                            underline: classes.underline
                                        }}
                                    />
                                }
                            >
                                <MenuItem value={"week"}>Weekly</MenuItem>
                                <MenuItem value={"month"}>Monthly</MenuItem>
                            </Select>
                            <Button size="sm" color="white" data-value="-1" onClick={updateRange}><Icon>keyboard_arrow_right</Icon></Button>
                        </div>
                    </div>
                    <BookingChart color="success" eventOrders={eventOrders.orders[0]} dataType="bookings" chartType="Line" />
                    <BookingChart color="warning" eventOrders={eventOrders.orders[0]} dataType="revenue" chartType="Bar" />
                </div >
            </Slide >
        );
    }
}

EventOrdersView.propTypes = {
    classes: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    eventOrders: state.eventOrders,
    dateRange: state.dateRange,
    selectedEvent: state.selectedEvent
});

const mapDispatchToProps = {
    setCurrentView,
    setDateRange,
    loadEventOrders
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(eventOrdersViewStyle)(EventOrdersView));