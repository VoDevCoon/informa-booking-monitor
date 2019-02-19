import {
    primaryColor,
    primaryBoxShadow
  } from "../main.jsx";

const eventsViewStyle = {
    eventsView: {
        margin: "0 auto",
        padding: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonsMargin: {
        margin:"10px 20px"
    },
    loading: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        "& div": {
            color: primaryColor
        }
    },
    snackbar: {
        ...primaryBoxShadow
    }
};

export default eventsViewStyle;
