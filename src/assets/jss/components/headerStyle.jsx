import {
    container,
    defaultFont,
    primaryColor,
    primaryBoxShadow
  } from "../main.jsx";
  
  const headerStyles = theme => ({
    appBar: {
      backgroundColor: primaryColor,
      marginBottom: "0",
      width: "100%",
      color: "#ffffff",
      border: "0",
      padding: "10px 30px",
      transition: "all 150ms ease 0s",
      minHeight: "65px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      ...primaryBoxShadow
    },
    container: {
      ...container,
      minHeight: "50px"
    },
    title: {
      ...defaultFont,
      fontWeight: "400",
      fontSize: "22px",
      color: "#ffffff",
      margin: "0",
      "&:hover,&:focus": {
        background: "transparent"
      }
    }
  });
  
  export default headerStyles;
  