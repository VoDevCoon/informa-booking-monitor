import {
    LOAD_EVENTS,
    LOAD_SELECTED_EVENTS,
    SET_FILTER,
    SET_SEARCH,
    TOGGLE_SELECTED_EVENTS
} from '../constants/action-types';

export const loadEvents = () =>{
    return {
        type: LOAD_EVENTS
    }
}

export const loadSelectedEvents = (selectedEvents) => {
    return {
        type: LOAD_SELECTED_EVENTS,
        payload: selectedEvents
    }
}

export const setFilter = (filter) => {
    return {
        type: SET_FILTER,
        payload: filter
    }
}

export const setSearch = (searchText) => {
    return {
        type: SET_SEARCH,
        payload: searchText
    }
}

export const toggleSelectedEvents = (eventCode) => {
    return {
        type: TOGGLE_SELECTED_EVENTS,
        payload: eventCode
    }
}