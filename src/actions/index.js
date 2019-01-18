import {
    SET_CURRENT_VIEW,
    LOAD_EVENTS,
    LOAD_SELECTED_EVENTS,
    SET_FILTER,
    SET_SEARCH,
    TOGGLE_SELECTED_EVENTS,
    LOAD_NEW_ORDERS
} from '../constants/action-types';

export const setCurrentView = (currentView) => {
    return {
        type: SET_CURRENT_VIEW,
        payload: currentView
    }
}

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

export const loadNewOrders = (selectedEvents) => {
    return {
        type: LOAD_NEW_ORDERS,
        payload: selectedEvents
    }
}