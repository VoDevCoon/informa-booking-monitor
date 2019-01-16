import { LOAD_EVENTS } from '../constants/action-types';

const sampleEvents = [
    {
        "categories": [
            "Conferences",
            "Education"
        ],
        "_id": "5c353f3be8b1fe546ea86942",
        "eventId": "1867",
        "name": "13th Annual University Governance and Regulations Forum",
        "eventCode": "P18K34",
        "status": "enable",
        "startDate": 1540339200000,
        "duration": 2,
        "createdDate": 1477875408000
    },
    {
        "categories": [
            "Conferences",
            "Defence &amp; Security"
        ],
        "_id": "5c353f3be8b1fe546ea86945",
        "eventId": "1880",
        "name": "15th Annual National Security Summit",
        "eventCode": "P17K24",
        "status": "enable",
        "startDate": 1503964800000,
        "duration": 2,
        "createdDate": 1477884449000
    },
    {
        "categories": [
            "Conferences",
            "Infrastructure"
        ],
        "_id": "5c353f3be8b1fe546ea86937",
        "eventId": "1891",
        "name": "18th Annual PPP Summit",
        "eventCode": "P19K17",
        "status": "enable",
        "startDate": 1549843200000,
        "duration": 2,
        "createdDate": 1477890006000
    },
    {
        "categories": [
            "Conferences",
            "Mining, Oil &amp; Gas"
        ],
        "_id": "5c353f3be8b1fe546ea8692b",
        "eventId": "2324",
        "name": "20th Annual Mineral Sands Conference",
        "eventCode": "P19R03",
        "status": "enable",
        "startDate": 1553040000000,
        "duration": 2,
        "createdDate": 1478653993000
    },
    {
        "categories": [
            "Conferences",
            "Policy &amp; Government",
            "Workplace Safety &amp; HR"
        ],
        "_id": "5c353f3be8b1fe546ea8693a",
        "eventId": "1890",
        "name": "20th Annual National Workers' Compensation Summit",
        "eventCode": "P19K03",
        "status": "enable",
        "startDate": 1550448000000,
        "duration": 2,
        "createdDate": 1477889217000
    },
    {
        "categories": [
            "Conferences",
            "Mining, Oil &amp; Gas"
        ],
        "_id": "5c353f3be8b1fe546ea8694e",
        "eventId": "1796",
        "name": "22nd Annual Global Iron Ore &amp; Steel Forecast Conference",
        "eventCode": "P19R01",
        "status": "enable",
        "startDate": 1553040000000,
        "duration": 2,
        "createdDate": 1477528954000
    },
    {
        "categories": [
            "Conferences",
            "Defence &amp; Security",
            "Education"
        ],
        "_id": "5c353f3be8b1fe546ea8690c",
        "eventId": "26739",
        "name": "2nd Annual STEM in Defence Summit",
        "eventCode": "P18K28",
        "status": "enable",
        "startDate": 1534809600000,
        "duration": 1,
        "createdDate": 1503357493000
    },
    {
        "categories": [
            "Conferences",
            "Infrastructure"
        ],
        "_id": "5c353f3be8b1fe546ea8690d",
        "eventId": "26259",
        "name": "2nd annual School Infrastructure Summit",
        "eventCode": "P18K13",
        "status": "enable",
        "startDate": 1540857600000,
        "duration": 2,
        "createdDate": 1502261364000
    },
    {
        "categories": [
            "Conferences",
            "Technology &amp; ICT"
        ],
        "_id": "5c353f3be8b1fe546ea868f9",
        "eventId": "41447",
        "name": "5G Australia Summit",
        "eventCode": "P18K31",
        "status": "enable",
        "startDate": 1552348800000,
        "duration": 1,
        "createdDate": 1536189154000
    },
    {
        "categories": [
            "Conferences",
            "Mining, Oil &amp; Gas"
        ],
        "_id": "5c353f3be8b1fe546ea86955",
        "eventId": "1794",
        "name": "5th Annual Katherine Regional  Mining &amp; Exploration Forum",
        "eventCode": "P17R06",
        "status": "enable",
        "startDate": 1495497600000,
        "duration": 2,
        "createdDate": 1477528421000
    },
    {
        "categories": [
            "Conferences",
            "Education",
            "Infrastructure"
        ],
        "_id": "5c353f3be8b1fe546ea8695c",
        "eventId": "1692",
        "name": "5th Annual School Planning, Design & Construction Summit",
        "eventCode": "P19K15",
        "status": "enable",
        "startDate": 1558396800000,
        "duration": 2,
        "createdDate": 1477349594000
    },
    {
        "categories": [
            "Conferences",
            "Defence &amp; Security"
        ],
        "_id": "5c353f3be8b1fe546ea86953",
        "eventId": "1776",
        "name": "6th Annual Northern Australia Defence Summit",
        "eventCode": "P18K21",
        "status": "enable",
        "startDate": 1539129600000,
        "duration": 2,
        "createdDate": 1477520874000
    },
    {
        "categories": [
            "Conferences",
            "Defence &amp; Security",
            "Technology &amp; ICT"
        ],
        "_id": "5c353f3be8b1fe546ea86925",
        "eventId": "14968",
        "name": "7th Annual Police Technology Forum",
        "eventCode": "P19K12",
        "status": "enable",
        "startDate": 1553644800000,
        "duration": 2,
        "createdDate": 1480289891000
    },
    {
        "categories": [
            "Conferences",
            "Defence &amp; Security"
        ],
        "_id": "5c353f3be8b1fe546ea86952",
        "eventId": "1773",
        "name": "ADM Congress 2019",
        "eventCode": "P19K01",
        "status": "enable",
        "startDate": 1550016000000,
        "duration": 1,
        "createdDate": 1477519920000
    },
    {
        "categories": [
            "Conferences",
            "Defence &amp; Security",
            "Infrastructure"
        ],
        "_id": "5c353f3be8b1fe546ea8693e",
        "eventId": "1871",
        "name": "ADM Defence Estate &amp; Base Services Summit",
        "eventCode": "P18K19",
        "status": "enable",
        "startDate": 1537315200000,
        "duration": 1,
        "createdDate": 1477882683000
    },
    {
        "categories": [
            "Banking &amp; Finance",
            "Conferences"
        ],
        "_id": "5c353f3be8b1fe546ea86957",
        "eventId": "1749",
        "name": "AFR Banking & Wealth Summit",
        "eventCode": "P19K05",
        "status": "enable",
        "startDate": 1553558400000,
        "duration": 2,
        "createdDate": 1477435802000
    },
    {
        "categories": [
            "Conferences",
            "Healthcare &amp; Nursing"
        ],
        "_id": "5c353f3be8b1fe546ea868fd",
        "eventId": "39012",
        "name": "AFR Healthcare Summit",
        "eventCode": "P19K04",
        "status": "enable",
        "startDate": 1550534400000,
        "duration": 1,
        "createdDate": 1531356660000
    },
    {
        "categories": [
            "Conferences",
            "Education"
        ],
        "_id": "5c353f3be8b1fe546ea86933",
        "eventId": "1945",
        "name": "AFR Higher Education Summit",
        "eventCode": "P18K16",
        "status": "enable",
        "startDate": 1535414400000,
        "duration": 2,
        "createdDate": 1478043896000
    },
    {
        "categories": [
            "Conferences",
            "Healthcare &amp; Nursing"
        ],
        "_id": "5c353f3be8b1fe546ea868fe",
        "eventId": "38712",
        "name": "AI, Machine Learning & Robotics in Health",
        "eventCode": "P18A10",
        "status": "enable",
        "startDate": 1542672000000,
        "duration": 2,
        "createdDate": 1530512627000
    },
    {
        "categories": [
            "Agriculture",
            "Conferences"
        ],
        "_id": "5c353f3be8b1fe546ea86907",
        "eventId": "29943",
        "name": "AgTech Summit",
        "eventCode": "P19K07",
        "status": "enable",
        "startDate": 1551139200000,
        "duration": 2,
        "createdDate": 1510534139000
    },
    {
        "categories": [
            "Conferences",
            "Defence &amp; Security",
            "Education"
        ],
        "_id": "5c353f3be8b1fe546ea86954",
        "eventId": "1820",
        "name": "Annual Campus Security &amp; Safety Conference",
        "eventCode": "P17A10",
        "status": "enable",
        "startDate": 1494201600000,
        "duration": 2,
        "createdDate": 1477543543000
    },
    {
        "categories": [
            "Banking &amp; Finance",
            "Conferences"
        ],
        "_id": "5c353f3be8b1fe546ea8690a",
        "eventId": "27408",
        "name": "Anti-Money Laundering Conference",
        "eventCode": "P18K25",
        "status": "enable",
        "startDate": 1521158400000,
        "duration": 1,
        "createdDate": 1505086914000
    },
    {
        "categories": [
            "Conferences",
            "Mining, Oil &amp; Gas"
        ],
        "_id": "5c353f3be8b1fe546ea868f3",
        "eventId": "43867",
        "name": "Asia-Pacific Nickel",
        "eventCode": "P19R05",
        "status": "enable",
        "startDate": 1553040000000,
        "duration": 2,
        "createdDate": 1541978035000
    },
    {
        "categories": [
            "Conferences",
            "Infrastructure",
            "Transport &amp; Logistics"
        ],
        "_id": "5c353f3be8b1fe546ea8692d",
        "eventId": "2252",
        "name": "AusRAIL",
        "eventCode": "P18M01",
        "status": "enable",
        "startDate": 1543276800000,
        "duration": 2,
        "createdDate": 1478641704000
    },
    {
        "categories": [
            "Conferences",
            "Infrastructure",
            "Transport &amp; Logistics"
        ],
        "_id": "5c353f3be8b1fe546ea86915",
        "eventId": "20778",
        "name": "Australasian Railway Association Rail Freight Conference",
        "eventCode": "P17M06",
        "status": "enable",
        "startDate": 1502928000000,
        "duration": 2,
        "createdDate": 1490851474000
    },
    {
        "categories": [
            "Banking &amp; Finance",
            "Conferences",
            "Defence &amp; Security",
            "Energy &amp; Utilities",
            "Infrastructure",
            "Mining, Oil &amp; Gas",
            "Policy &amp; Government",
            "Technology &amp; ICT",
            "Transport &amp; Logistics"
        ],
        "_id": "5c353f3be8b1fe546ea868f2",
        "eventId": "44169",
        "name": "Australian - Timor-Leste Business Forum",
        "eventCode": "P19R14",
        "status": "enable",
        "startDate": 1553558400000,
        "duration": 2,
        "createdDate": 1542758990000
    },
    {
        "categories": [
            "Conferences",
            "Facilities Management",
            "Infrastructure",
            "Policy &amp; Government"
        ],
        "_id": "5c353f3be8b1fe546ea8690b",
        "eventId": "27260",
        "name": "Australian Cladding & Building Standards Summit",
        "eventCode": "P18R19",
        "status": "enable",
        "startDate": 1529884800000,
        "duration": 2,
        "createdDate": 1504662126000
    },
    {
        "categories": [
            "Conferences",
            "Mining, Oil &amp; Gas"
        ],
        "_id": "5c353f3be8b1fe546ea86919",
        "eventId": "19934",
        "name": "Australian Coal Conference",
        "eventCode": "P18R20",
        "status": "enable",
        "startDate": 1534377600000,
        "duration": 2,
        "createdDate": 1488949917000
    },
    {
        "categories": [
            "Conferences",
            "Energy &amp; Utilities",
            "Mining, Oil &amp; Gas"
        ],
        "_id": "5c353f3be8b1fe546ea8692e",
        "eventId": "2216",
        "name": "Australian Gas Turbines Conference",
        "eventCode": "P18R17",
        "status": "enable",
        "startDate": 1543363200000,
        "duration": 2,
        "createdDate": 1478586458000
    }];

const fetchEvents = () => {
    return sampleEvents;
}

export default function events(state=fetchEvents(), action) {
    switch (action.type) {
        case LOAD_EVENTS:
            return state;
        default:
            return state;
    }
}