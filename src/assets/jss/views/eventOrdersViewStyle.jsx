const eventOrdersViewStyle = {
    eventOrdersView: {
        margin: "0 auto",
        padding: "0 30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        '@media (min-width: 768px)':{
            width: "60%"
        },
        '@media (min-width: 1440px)':{
            width: "38%"
        }
    },
    eventOrders: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
}

export default eventOrdersViewStyle;
