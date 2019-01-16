import events from './events';
import filter from './filter';
import search from './search';
import selectedEvents from './selectedEvents'
import { combineReducers } from 'redux';

export default combineReducers({
    events,
    filter,
    search,
    selectedEvents
});