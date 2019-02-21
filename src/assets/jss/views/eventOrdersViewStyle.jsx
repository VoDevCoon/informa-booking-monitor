const eventOrdersViewStyle = {
    eventOrdersView: {
        margin: "0 auto",
        padding: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center"
    },
    eventOrders: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%"
    },
    eventCode: {
        margin: "0",
    },
    eventName: {
        margin: "0 0 15px 0",
    },
    searchBar: {
        margin: "0 0 10px 0"
    },
    dateRangeSelector: {
        padding: "0 20px",
        margin: "0 5px"
    },
    underline:{
        '&:after': {
          borderBottom: "2px solid #00acc1"
        }  
    },
    '&:hover:not($disabled):not($focused):not($error):before': {
        borderBottom: "`2px solid #999999"
    }
}

export default eventOrdersViewStyle;
