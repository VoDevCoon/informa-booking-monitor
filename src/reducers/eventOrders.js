import { LOAD_EVENT_ORDERS_SUCCESS } from '../constants/action-types';

const initailState = {
    lastUpdated: Date.now(),
    orders: [{
        dailyOrders: [
            {Mon: {bookings: 0, revenue: 0, createdDate: ""}},
            {Tue: {bookings: 0, revenue: 0, createdDate: ""}},
            {Wed: {bookings: 0, revenue: 0, createdDate: ""}},
            {Thu: {bookings: 0, revenue: 0, createdDate: ""}},
            {Fri: {bookings: 0, revenue: 0, createdDate: ""}},
            {Sat: {bookings: 0, revenue: 0, createdDate: ""}},
            {Sun: {bookings: 0, revenue: 0, createdDate: ""}}
        ],
        eventCode: "",
        eventId: "",
        eventName: "",
        totalBookings: 0,
        totalRevenue: 0
    }]
};

export default function eventOrders(state = initailState, action) {
    switch (action.type) {
        case LOAD_EVENT_ORDERS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}