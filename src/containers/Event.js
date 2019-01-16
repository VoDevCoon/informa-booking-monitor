import React from 'react';
import { connect } from 'react-redux';

import { toggleSelectedEvents } from '../actions';

import moment from 'moment-timezone';
import './Event.css';

const Event = (props) => {

        const updateSelectedEvents = e => {
            const eventCode = e.target.dataset.code;
            toggleSelectedEvents(eventCode);
        }

        const { selectedEvents, event, toggleSelectedEvents } = props;
        const selected = selectedEvents.indexOf(event.eventCode)>=0 ? true : false;
        const division = event.eventCode.slice(3,4).toLowerCase();

        return (
            <div className="Event">
                <div className="Event__top">
                    <div className={`Event__top-code ${division}`}>{event.eventCode}</div>
                    <div className="Event__top-fav">
                        <i data-code={event.eventCode} className={`fas fa-star ${selected ? "selected" : "not"}`} onClick={updateSelectedEvents}></i>
                    </div>
                </div>
                <div className="Event__bottom">
                    <h4 className="Event__bottom-name">{event.name}</h4>
                    <span className="Event__bottom-date"><i className="far fa-calendar"></i> {moment(event.startDate).tz('Australia/Sydney').format("YYYY-MM-DD")}</span>
                    <ul className="Event__bottom-categories">
                        {event.categories.map((category, i) => {
                            if (category.toLowerCase() !== "conferences") {
                                return <li key={i}><i className="far fa-bookmark"></i> {category.replace(/&amp;/g, '&')}</li>
                            }
                        })}
                    </ul>
                </div>
            </div>
        );
}

const mapStateToProps = state => ({
    selectedEvents: state.selectedEvents
});

const mapDispatchToProps = {
    toggleSelectedEvents
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Event);