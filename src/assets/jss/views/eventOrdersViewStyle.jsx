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
        alignItems: "center"
    },
    cssLabel: {
        "&$cssFocused": {
            color: "#26c6da"
        }
    },
    cssFocused: {},
    cssOutlinedInput: {
        "&$cssFocused $notchedOutline": {
            borderColor: "#26c6da"
        }
    },
    notchedOutline: {}
}

export default eventOrdersViewStyle;
