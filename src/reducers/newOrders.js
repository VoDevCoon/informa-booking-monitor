import { LOAD_NEW_ORDERS } from '../constants/action-types';

const sampleOrders = {
    "P19M02": {
        "bookings": 1,
        "revenue": 2002,
        "createdDate": "2019-01-16T13:00:00.000Z",
        "name": "Light Rail 2019"
    },
    "P19K01": {
        "bookings": 2,
        "revenue": 2629,
        "createdDate": "2019-01-16T13:00:00.000Z",
        "name": "ADM Congress 2019"
    },
    "P19K13": {
        "bookings": 0,
        "revenue": 0,
        "createdDate": "2019-01-16T13:00:00.000Z",
        "name": "ADM Space Summit"
    },
    "P19R03": {
        "bookings": 0,
        "revenue": 0,
        "createdDate": "2019-01-16T13:00:00.000Z",
        "name": "20th Annual Mineral Sands Conference"
    }
};

export default function newOrders(state=sampleOrders, action){
    switch (action.type) {
        case LOAD_NEW_ORDERS:
            return state;
        default:
            return state;
    }
}