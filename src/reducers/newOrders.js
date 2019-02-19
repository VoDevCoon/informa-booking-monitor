import { LOAD_NEW_ORDERS_SUCCESS } from '../constants/action-types';

export default function newOrders(state={}, action){
    switch (action.type) {
        case LOAD_NEW_ORDERS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}