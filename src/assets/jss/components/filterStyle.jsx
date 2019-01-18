const filterStyle = {
    filter: {
        display: "flex",
        margin: "5px 0",
        justifyContent: "space-between",
        width: "100%"
    },
    filterShow: {
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        "& button, button:focus": {
            backgroundColor: "transparent",
            boxShadow: "none",
            marginLeft: "10px",
            color: "#363636",
            fontWeight: "600"
        },
        "& h4": {
            fontSize: "0.9em",
            fontWeight: "600",
            textTransform: "uppercase"
        }
    },
    selected: {
        background: "linear-gradient(60deg, #26c6da, #00acc1)",
        "& span": {
            color: "#fff"
        }
    },
    starSelected: {
        color: "rgb(252, 172, 0) !important",
        textShadow: "0px 1px 1px #ffffff, 0 0 0 #666666, 1px 4px 6px transparent"
    },
    starNot: {
        color: "rgba(192, 192, 192, 0.2) !important",
        textShadow: "0px 2px 2px #ffffff, 0 0 0 #333333, 1px 4px 6px transparent"
    },
    filterSearch: {
        display: "flex",
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

export default filterStyle;