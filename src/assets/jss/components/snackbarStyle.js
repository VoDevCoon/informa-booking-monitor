import {
    grayColor,
    primaryColor,
    infoColor,
    successColor,
    warningColor,
    dangerColor,
    roseColor
  } from '../main.jsx';

const snackbarStyle = {
    success: {
      backgroundColor: successColor,
    },
    error: {
        backgroundColor: dangerColor,
    },
    info: {
      backgroundColor: infoColor,
    },
    warning: {
      backgroundColor: warningColor,
    },
    icon: {
      fontSize: 20,
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: "5px",
    },
    message: {
      display: 'flex',
      alignItems: 'center',
    }
}

export default snackbarStyle;