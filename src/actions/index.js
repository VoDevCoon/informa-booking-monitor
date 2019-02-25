import {
    SET_CURRENT_VIEW,
    LOAD_EVENTS_START,
    LOAD_EVENTS_SUCCESS,
    LOAD_EVENTS_ERROR,
    LOAD_SELECTED_EVENTS,
    SET_FILTER,
    SET_SEARCH,
    TOGGLE_SELECTED_EVENTS,
    LOAD_NEW_ORDERS_START,
    LOAD_NEW_ORDERS_ERROR,
    LOAD_NEW_ORDERS_SUCCESS,
    SET_SELECTED_EVENT,
    SET_DATE_RANGE,
    LOAD_EVENT_ORDERS_START,
    LOAD_EVENT_ORDERS_ERROR,
    LOAD_EVENT_ORDERS_SUCCESS,
    SHOW_SNACKBAR,
    HIDE_SNACKBAR
} from '../constants/action-types';

const apiRoot = "";

export const setCurrentView = (currentView) => {
    return {
        type: SET_CURRENT_VIEW,
        payload: currentView
    }
}

export const loadEventsStart = () => {
    console.log("in loadEventStart");
    return {
        type: LOAD_EVENTS_START
    }
}

export const loadEventsSuccess = (events) => {
    return {
        type: LOAD_EVENTS_SUCCESS,
        payload: events
    }
}

export const loadEventsError = () => {
    return {
        type: LOAD_EVENTS_ERROR
    }
}

export const loadEvents = () => {
    /* eslint-disable no-undef */

    return (dispatch) => {
        dispatch(loadEventsStart());
        chrome.storage.local.get(["cachedEvents"], (data) => {

            const cachedEvents = data.cachedEvents;
            if (cachedEvents && cachedEvents.events) {
                dispatch(loadEventsSuccess(cachedEvents));
                dispatch(showSnackbar("Loaded events from chrome data store!", "info"));
            }
            else {
                fetch(`${apiRoot}/events/enable`)
                    .then(
                        response => response.json(),
                        error => {
                            dispatch(loadEventsError());
                            return Promise.reject(error);
                        })
                    .then(
                        json => {
                            const fetchedEvents = { events: json, lastUpdated: Date.now() };
                            dispatch(loadEventsSuccess(fetchedEvents));
                            chrome.storage.local.set({ cachedEvents: fetchedEvents });

                            dispatch(showSnackbar("Fetching events successfully!", "success"));
                        })
                    .catch(error => dispatch(showSnackbar("Fail to fetch events from server.", "error")));
            }
        });
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

export const loadNewOrdersStart = () => {
    return {
        type: LOAD_NEW_ORDERS_START
    }
}

export const loadNewOrdersError = () => {
    return {
        type: LOAD_NEW_ORDERS_ERROR
    }
}

export const loadNewOrdersSuccess = (newOrders) => {
    return {
        type: LOAD_NEW_ORDERS_SUCCESS,
        payload: newOrders
    }
}

export const loadNewOrders = (selectedEvents) => {
    /* eslint-disable no-undef */

    return (dispatch) => {
        dispatch(loadNewOrdersStart());
        chrome.storage.local.get(["cachedNewOrders"], (data) => {

            const cachedNewOrders = data.cachedNewOrders;
            if (cachedNewOrders && cachedNewOrders.orders) {
                dispatch(loadNewOrdersSuccess(cachedNewOrders));
                dispatch(showSnackbar("Loaded latest daily orders from chrome data store!", "info"));
            }
            else {
                fetch(`${apiRoot}/orders/today`, {
                    method: 'POST',
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "events": selectedEvents
                    })
                })
                    .then(
                        response => response.json(),
                        error => {
                            dispatch(loadNewOrdersError());
                            return Promise.reject(error);
                        })
                    .then(
                        json => {
                            const fetchedNewOrders = { orders: json, lastUpdated: Date.now() };
                            dispatch(loadNewOrdersSuccess(fetchedNewOrders));
                            chrome.storage.local.set({ cachedNewOrders: fetchedNewOrders });
                            chrome.browserAction.setBadgeText({ text: caculateNewOrders(fetchedNewOrders.orders).toString() });

                            dispatch(showSnackbar("Fetching latest daily orders successfully!", "success"));
                        })
                    .catch(error => dispatch(showSnackbar(`Fail to fetct latest daily orders from server. Details: ${error.message}`, "error")));
            }
        });
    }
}

export const setSelectedEvent = (eventCode) => {
    return {
        type: SET_SELECTED_EVENT,
        payload: eventCode
    }
}

export const setDateRange = (dateRange) => {
    return {
        type: SET_DATE_RANGE,
        payload: dateRange
    }
}

export const loadEventOrdersStart = () => {
    return {
        type: LOAD_EVENT_ORDERS_START
    }
}

export const loadEventOrdersError = () => {
    return {
        type: LOAD_EVENT_ORDERS_ERROR
    }
}

export const loadEventOrdersSuccess = (eventOrders) => {
    return {
        type: LOAD_EVENT_ORDERS_SUCCESS,
        payload: eventOrders
    }
}

export const loadEventOrders = (dateRange, selectedEvent) => {
    return (dispatch) => {
        dispatch(setDateRange(dateRange));
        dispatch(loadEventOrdersStart());

        const event = new Array(selectedEvent); // convert to Array to conform api payload format

        fetch(`${apiRoot}/orders/${dateRange.dateRangeSelector}/${dateRange.range}`, {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "events": event
            })
        })
            .then(
                response => response.json(),
                error => {
                    dispatch(loadEventOrdersError());
                    return Promise.reject(error);
                })
            .then(
                json => {
                    const fetchedEventOrders = { orders: json, lastUpdated: Date.now() };
                    dispatch(loadEventOrdersSuccess(fetchedEventOrders));
                })
            .catch(error => dispatch(showSnackbar(`Fail to fetct event orders from server. Details: ${error.message}`, "error")));

    }
}

export const showSnackbar = (message, variant) => {
    return {
        type: SHOW_SNACKBAR,
        payload: {
            snackbarOpen: true,
            snackbarMessage: message,
            snackbarVariant: variant,
        }
    }
}

export const hideSnackbar = () => {
    return {
        type: HIDE_SNACKBAR,
        payload: {
            snackbarOpen: false,
            snackbarMessage: '',
        }
    }
}