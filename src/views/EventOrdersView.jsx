import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { setCurrentView, setDateRange } from '../actions';

import withStyles from '@material-ui/core/styles/withStyles';
import Icon from '@material-ui/core/Icon';
import Slide from '@material-ui/core/Slide';
import Select from '@material-ui/core/Select';
import MenuItem from "@material-ui/core/MenuItem";
import BookingChart from '../containers/BookingChart';
import Button from '../components/Button';

import eventOrdersViewStyle from '../assets/jss/views/eventOrdersViewStyle.jsx';
import FilledInput  from "@material-ui/core/FilledInput";

class EventOrdersView extends Component {

    componentDidMount() {
        const { selectedEvent } = this.props;
        if (selectedEvent !== "") {
            console.log(`mount event: ${selectedEvent}`);
        }
    }

    componentDidUpdate() {
        console.log(this.props);
    }

    render() {
        const { classes, selectedEvent, dateRange, setCurrentView, setDateRange } = this.props;
        let eventOrders = {};
        if (dateRange.dateRangeSelector === "weekly") {
            eventOrders = {
                "eventId": "5c353f3be8b1fe546ea8695a",
                "eventCode": "P19M02",
                "eventName": "Light Rail 2019",
                "dailyOrders": [
                    {
                        "Mon": {
                            "bookings": 0,
                            "revenue": 0,
                            "createdDate": "2019-01-13T13:00:00.000Z"
                        }
                    },
                    {
                        "Tue": {
                            "bookings": 1,
                            "revenue": 2002,
                            "createdDate": "2019-01-14T13:00:00.000Z"
                        }
                    },
                    {
                        "Wed": {
                            "bookings": 3,
                            "revenue": 6809,
                            "createdDate": "2019-01-15T13:00:00.000Z"
                        }
                    },
                    {
                        "Thu": {
                            "bookings": 2,
                            "revenue": 4004,
                            "createdDate": "2019-01-16T13:00:00.000Z"
                        }
                    },
                    {
                        "Fri": {
                            "bookings": 0,
                            "revenue": 0,
                            "createdDate": "2019-01-17T13:00:00.000Z"
                        }
                    },
                    {
                        "Sat": {
                            "bookings": 0,
                            "revenue": 0,
                            "createdDate": "2019-01-18T13:00:00.000Z"
                        }
                    },
                    {
                        "Sun": {
                            "bookings": 0,
                            "revenue": 0,
                            "createdDate": "2019-01-19T13:00:00.000Z"
                        }
                    }
                ],
                "totalBookings": 6,
                "totalRevenue": 12815
            };
        }
        else if (dateRange.dateRangeSelector === "monthly") {
            eventOrders = {
                "eventId": "5c353f3be8b1fe546ea8695a",
                "eventName": "Light Rail 2019",
                "eventCode": "P19M02",
                "dailyOrders": [
                    {
                        "1": {
                            "bookings": 0,
                            "revenue": 0,
                            "createdDate": "2018-11-30T13:00:00.000Z"
                        }
                    },
                    {
                        "2": {
                            "bookings": 0,
                            "revenue": 0,
                            "createdDate": "2018-12-01T13:00:00.000Z"
                        }
                    },
                    {
                        "3": {
                            "bookings": 0,
                            "revenue": 0,
                            "createdDate": "2018-12-02T13:00:00.000Z"
                        }
                    },
                    {
                        "4": {
                            "bookings": 0,
                            "revenue": 0,
                            "createdDate": "2018-12-03T13:00:00.000Z"
                        }
                    },
                    {
                        "5": {
                            "bookings": 1,
                            "revenue": 4004,
                            "createdDate": "2018-12-04T13:00:00.000Z"
                        }
                    },
                    {
                        "6": {
                            "bookings": 0,
                            "revenue": 0,
                            "createdDate": "2018-12-05T13:00:00.000Z"
                        }
                    },
                    {
                        "7": {
                            "bookings": 0,
                            "revenue": 0,
                            "createdDate": "2018-12-06T13:00:00.000Z"
                        }
                    },
                    {
                        "8": {
                            "bookings": 0,
                            "revenue": 0,
                            "createdDate": "2018-12-07T13:00:00.000Z"
                        }
                    },
                    {
                        "9": {
                            "bookings": 0,
                            "revenue": 0,
                            "createdDate": "2018-12-08T13:00:00.000Z"
                        }
                    },
                    {
                        "10": {
                            "bookings": 0,
                            "revenue": 0,
                            "createdDate": "2018-12-09T13:00:00.000Z"
                        }
                    },
                    {
                        "11": {
                            "bookings": 0,
                            "revenue": 0,
                            "createdDate": "2018-12-10T13:00:00.000Z"
                        }
                    },
                    {
                        "12": {
                            "bookings": 0,
                            "revenue": 0,
                            "createdDate": "2018-12-11T13:00:00.000Z"
                        }
                    },
                    {
                        "13": {
                            "bookings": 0,
                            "revenue": 0,
                            "createdDate": "2018-12-12T13:00:00.000Z"
                        }
                    },
                    {
                        "14": {
                            "bookings": 1,
                            "revenue": 2002,
                            "createdDate": "2018-12-13T13:00:00.000Z"
                        }
                    },
                    {
                        "15": {
                            "bookings": 0,
                            "revenue": 0,
                            "createdDate": "2018-12-14T13:00:00.000Z"
                        }
                    },
                    {
                        "16": {
                            "bookings": 0,
                            "revenue": 0,
                            "createdDate": "2018-12-15T13:00:00.000Z"
                        }
                    },
                    {
                        "17": {
                            "bookings": 4,
                            "revenue": 10010,
                            "createdDate": "2018-12-16T13:00:00.000Z"
                        }
                    },
                    {
                        "18": {
                            "bookings": 0,
                            "revenue": 0,
                            "createdDate": "2018-12-17T13:00:00.000Z"
                        }
                    },
                    {
                        "19": {
                            "bookings": 0,
                            "revenue": 0,
                            "createdDate": "2018-12-18T13:00:00.000Z"
                        }
                    },
                    {
                        "20": {
                            "bookings": 0,
                            "revenue": 0,
                            "createdDate": "2018-12-19T13:00:00.000Z"
                        }
                    },
                    {
                        "21": {
                            "bookings": 0,
                            "revenue": 0,
                            "createdDate": "2018-12-20T13:00:00.000Z"
                        }
                    },
                    {
                        "22": {
                            "bookings": 0,
                            "revenue": 0,
                            "createdDate": "2018-12-21T13:00:00.000Z"
                        }
                    },
                    {
                        "23": {
                            "bookings": 0,
                            "revenue": 0,
                            "createdDate": "2018-12-22T13:00:00.000Z"
                        }
                    },
                    {
                        "24": {
                            "bookings": 0,
                            "revenue": 0,
                            "createdDate": "2018-12-23T13:00:00.000Z"
                        }
                    },
                    {
                        "25": {
                            "bookings": 0,
                            "revenue": 0,
                            "createdDate": "2018-12-24T13:00:00.000Z"
                        }
                    },
                    {
                        "26": {
                            "bookings": 0,
                            "revenue": 0,
                            "createdDate": "2018-12-25T13:00:00.000Z"
                        }
                    },
                    {
                        "27": {
                            "bookings": 0,
                            "revenue": 0,
                            "createdDate": "2018-12-26T13:00:00.000Z"
                        }
                    },
                    {
                        "28": {
                            "bookings": 0,
                            "revenue": 0,
                            "createdDate": "2018-12-27T13:00:00.000Z"
                        }
                    },
                    {
                        "29": {
                            "bookings": 0,
                            "revenue": 0,
                            "createdDate": "2018-12-28T13:00:00.000Z"
                        }
                    },
                    {
                        "30": {
                            "bookings": 0,
                            "revenue": 0,
                            "createdDate": "2018-12-29T13:00:00.000Z"
                        }
                    },
                    {
                        "31": {
                            "bookings": 0,
                            "revenue": 0,
                            "createdDate": "2018-12-30T13:00:00.000Z"
                        }
                    }
                ],
                "totalBookings": 6,
                "totalRevenue": 16016
            };
        }

        const updateCurrentView = e => {
            e.preventDefault();
            setCurrentView("NewOrdersView");
        }

        const updateRange = e => {
            const value = +e.target.closest("button").dataset.value;
            let range = dateRange.range;
            range = range + value > 0 ? range + value : 0;
            const newDateRange = { range, dateRangeSelector: dateRange.dateRangeSelector };
            setDateRange(newDateRange);
            console.log(newDateRange);
        };

        const updagteDateRangeSelector = e => {
            const dateRangeSelector = e.target.value;
            console.log(`range select: ${dateRangeSelector}`);

            const newDateRange = { "range": 0, dateRangeSelector };
            setDateRange(newDateRange);
            console.log(newDateRange);
        };

        return (

            <Slide direction="left" in>
                <div className={classes.eventOrdersView}>
                    <Button className={classes.backButton} color="success" onClick={updateCurrentView}>
                        <Icon>arrow_back</Icon>
                    </Button>
                    <div className={classes.eventOrders}>
                        <h4 className={classes.cardTitle}>{eventOrders.eventCode} - {eventOrders.eventName}</h4>
                        <div className={classes.searchBar}>
                            <Button size="sm" color="white" data-value="1" onClick={updateRange}><Icon>keyboard_arrow_left</Icon></Button>
                            <Select value={dateRange.dateRangeSelector}
                                onChange={updagteDateRangeSelector}
                                >
                                <MenuItem value={"weekly"}>Weekly</MenuItem>
                                <MenuItem value={"monthly"}>Monthly</MenuItem>
                            </Select>
                            <Button size="sm" color="white" data-value="-1" onClick={updateRange}><Icon>keyboard_arrow_right</Icon></Button>
                        </div>
                        <BookingChart color="success" eventOrders={eventOrders} dataType="bookings" chartType="Line" />
                        <BookingChart color="warning" eventOrders={eventOrders} dataType="revenue" chartType="Bar" />
                    </div>
                </div>
            </Slide>
        );
    }
}

EventOrdersView.propTypes = {
    classes: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    dateRange: state.dateRange,
    selectedEvent: state.selectedEvent
});

const mapDispatchToProps = {
    setCurrentView,
    setDateRange
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(eventOrdersViewStyle)(EventOrdersView));