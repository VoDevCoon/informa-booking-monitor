import currentView from './currentView';
import events from './events';
import filter from './filter';
import search from './search';
import selectedEvents from './selectedEvents';
import newOrders from './newOrders';
import selectedEvent from './selectedEvent';
import dateRange from './dateRange';
import eventOrders from './eventOrders';
import asyncStatus from './asyncStatus';
import snackbar from './snackbar';
import { combineReducers } from 'redux';

export default combineReducers({
    currentView,
    newOrders,
    events,
    filter,
    search,
    selectedEvents,
    selectedEvent,
    dateRange,
    eventOrders,
    asyncStatus,
    snackbar
});