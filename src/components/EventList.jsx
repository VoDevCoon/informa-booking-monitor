import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

//import Event from '../containers/Event';
import Event from '../containers/Event.jsx';

import eventListStyle from '../assets/jss/components/eventListStyle.jsx';

const EventList = ({...props}) => {

    const { classes, events } = props;

    return (
        <div className={classes.eventList}>
            {events.map(event => <Event event={event} key={event.eventId} />)}
        </div>
    );
}

EventList.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(eventListStyle)(EventList);