import currentView from './currentView';
import events from './events';
import filter from './filter';
import search from './search';
import selectedEvents from './selectedEvents';
import newOrders from './newOrders';
import { combineReducers } from 'redux';

export default combineReducers({
    currentView,
    newOrders,
    events,
    filter,
    search,
    selectedEvents
});