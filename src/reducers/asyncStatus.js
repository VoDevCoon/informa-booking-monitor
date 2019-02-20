import {
    LOAD_EVENTS_ERROR,
    LOAD_EVENTS_START,
    LOAD_EVENTS_SUCCESS,
    LOAD_NEW_ORDERS_ERROR,
    LOAD_NEW_ORDERS_START,
    LOAD_NEW_ORDERS_SUCCESS,
    LOAD_EVENT_ORDERS_ERROR,
    LOAD_EVENT_ORDERS_START,
    LOAD_EVENT_ORDERS_SUCCESS
} from '../constants/action-types'

const initialState = {
    loadEventsStart: false,
    loadEventsError: false,
    loadEventsSuccess: false,
    loadNewOrdersStart: false,
    loadNewOrdersError: false,
    loadNewOrdersSuccess: false,
    loadEventOrdersStart: false,
    loadEventOrdersError: false,
    loadEventOrdersSuccess: false
};

export default function asyncStatus(state = initialState, action) {
    switch (action.type) {
        case LOAD_EVENTS_START:
            return {
                ...state,
                ...{
                    loadEventsStart: true,
                    loadEventsError: false,
                    loadEventsSuccess: false
                }
            };
        case LOAD_EVENTS_SUCCESS:
            return {
                ...state,
                ...{
                    loadEventsStart: false,
                    loadEventsError: false,
                    loadEventsSuccess: true
                }
            };
        case LOAD_EVENTS_ERROR:
            return {
                ...state,
                ...{
                    loadEventsStart: false,
                    loadEventsError: true,
                    loadEventsSuccess: false
                }
            };
        case LOAD_NEW_ORDERS_START:
            return {
                ...state,
                ...{
                    loadNewOrdersStart: true,
                    loadNewOrdersError: false,
                    loadNewOrdersSuccess: false
                }
            };
        case LOAD_NEW_ORDERS_SUCCESS:
            return {
                ...state,
                ...{
                    loadNewOrdersStart: false,
                    loadNewOrdersError: false,
                    loadNewOrdersSuccess: true
                }
            };
        case LOAD_NEW_ORDERS_ERROR:
            return {
                ...state,
                ...{
                    loadNewOrdersStart: false,
                    loadNewOrdersError: true,
                    loadNewOrdersSuccess: false
                }
            };
        case LOAD_EVENT_ORDERS_START:
        return {
            ...state,
            ...{
                loadEventOrdersStart: true,
                loadEventOrdersError: false,
                loadEventOrdersSuccess: false
            }
        };
        case LOAD_EVENT_ORDERS_ERROR:
        return {
            ...state,
            ...{
                loadEventOrdersStart: false,
                loadEventOrdersError: true,
                loadEventOrdersSuccess: false
            }
        };
        case LOAD_EVENT_ORDERS_SUCCESS:
        return {
            ...state,
            ...{
                loadEventOrdersStart: false,
                loadEventOrdersError: false,
                loadEventOrdersSuccess: true
            }
        };
        default:
            return state;
    }
}