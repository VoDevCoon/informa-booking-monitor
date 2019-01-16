import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import { toggleSelectedEvents } from '../actions';

import Card from '../components/Card.jsx';
import CardHeader from '../components/CardHeader.jsx';
import CardBody from '../components/CardBody.jsx';
import CardFooter from '../components/CardFooter';
import eventStyle from '../assets/jss/components/eventStyle.jsx';

const Event = ({...props}) => {

    const updateSelectedEvents = e => {
        const eventCode = e.target.dataset.code;
        toggleSelectedEvents(eventCode);
    }

    const { classes, selectedEvents, event, toggleSelectedEvents } = props;
    const selected = selectedEvents.indexOf(event.eventCode)>=0 ? true : false;
    const division = event.eventCode.slice(3,4).toLowerCase();

    return (
        <Card>
            <CardHeader className={classes.eventTop}>
                <div className={classes.eventCode + " " + division}>{event.eventCode}</div>
                <div className={classes.fav}>
                    <i data-code={event.eventCode} className={`fas fa-star ${selected ? "selected" : "not"}`} onClick={updateSelectedEvents}></i>
                </div>
            </CardHeader>
            <CardBody className={classes.eventBottom}>
                <Typography variant="h6">{event.name}</Typography>
                <span className={classes.eventDate}>
                    <i className="far fa-calendar"></i> {moment(event.startDate).tz('Australia/Sydney').format("YYYY-MM-DD")}
                </span>
            </CardBody>
            <CardFooter>
                <ul className={classes.eventCat}>
                    {event.categories.map((category, i) => {
                        if (category.toLowerCase() !== "conferences") {
                            return <li key={i}><i className="far fa-bookmark"></i> {category.replace(/&amp;/g, '&')}</li>
                        }
                    })}
                </ul>
            </CardFooter>
        </Card>
    );
}

Event.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    selectedEvents: state.selectedEvents
});

const mapDispatchToProps = {
    toggleSelectedEvents
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(eventStyle)(Event)); 