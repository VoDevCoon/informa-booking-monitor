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
    minHeight: "50px",
    width: "100%"
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
  },
  loading: {
    position: "absolute",
    right: "0",
    color: "#d6edff"
  },
  logo: {
    width: "20px",
    marginRight: "10px"
  }
});

export default headerStyles;
