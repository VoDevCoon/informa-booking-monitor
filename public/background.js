const orderRefreshAlarm = "order_refresh";
const eventRefreshAlarm = "event_refresh";
const apiRoot = "http://13.238.146.198";

const caculateNewOrders = (fetchedOrders) => {
    let newBookings = 0;
    let prevTotalBookings = 0;
    let latestTotalBookings = 0;

    Object.keys(fetchedOrders).forEach(key => {
        latestTotalBookings += fetchedOrders[key].bookings;
    });

    chrome.storage.local.get(["prevTotalBookings"], (data) => {
        prevTotalBookings = data.prevTotalBookings ? data.prevTotalBookingsc : 0;
    });

    if (latestTotalBookings > prevTotalBookings) {
        newBookings = latestTotalBookings - prevTotalBookings;
    }
    else {
        // preTotalBookings is from the day before, reset to 0
        newBookings = latestTotalBookings;
        chrome.storage.local.set({ prevTotalBookings: 0 });
    }

    return newBookings;
}

chrome.browserAction.setBadgeBackgroundColor({ color: "#ff0000" });

chrome.runtime.onInstalled.addListener(() => {
    chrome.alarms.create(orderRefreshAlarm, {
        periodInMinutes: 15
    });

    chrome.alarms.create(eventRefreshAlarm, {
        periodInMinutes: 60 * 24 //refresh daily
    })
});

chrome.alarms.onAlarm.addListener(alarm => {
    if (alarm.name === orderRefreshAlarm) {
        chrome.storage.local.get(["selectedEvents"], (data) => {
            const cachedSelectedEvents = data.selectedEvents ? data.selectedEvents : [];

            if (cachedSelectedEvents.length > 0) {
                fetch(`${apiRoot}/orders/today`, {
                    method: 'POST',
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "events": cachedSelectedEvents
                    })
                })
                    .then(
                        response => response.json(),
                        error => {
                            return Promise.reject(error);
                        })
                    .then(
                        json => {
                            const fetchedNewOrders = { orders: json, lastUpdated: Date.now() };
                            chrome.storage.local.set({ cachedNewOrders: fetchedNewOrders });
                            chrome.browserAction.setBadgeText({ text: caculateNewOrders(fetchedNewOrders.orders).toString() });
                        })
                    .catch(error => chrome.storage.local.set({ prevError: error.message }));
            }
        });
    }
});