const eventStyle = {
    eventTop: {
        padding: "10px 15px 0 15px",
        textAlign: "right"
    },
    eventBottom: {
        borderBottom: "1px solid #eee",
        "& h6": {
            fontSize: "1rem",
            marginBottom: "10px"
        }
    },
    eventCode: {
        float: "left",
        padding: "8px 25px",
        marginTop: "-25px",
        borderRadius: "2px",
        color: "#fff",
        fontWeight: "600",
        "&.k": {
            background: "linear-gradient(60deg, #26c6da, #00acc1)",
            boxShadow: "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"
        },
        "&.r": {
            background: "linear-gradient(60deg, #ffa726, #fb8c00)",
            boxShadow: "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
        },
        "&.m, &.a":{
            background: "linear-gradient(60deg, #66bb6a, #43a047)",
            boxShadow: "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"
        }
    },
    fav: {
        "& i": {
            cursor: "pointer",
            fontSize: "1.2em"
        },
        "& i.selected": {
            color: "rgb(252, 172, 0)",
            textShadow: "0px 1px 1px #ffffff, 0 0 0 #666666, 1px 4px 6px transparent"
        },
        "& i.not": {
            color: "rgba(192, 192, 192, 0.2)",
            textShadow: "0px 2px 2px #ffffff, 0 0 0 #333333, 1px 4px 6px transparent"
        }
    },
    eventCat: {
        display: "flex",
        flexWrap: "wrap",
        margin:  "0",
        padding: "5px 0 0 0",
        "& li": {
            listStyleType: "none",
            marginRight: "15px"
        }
    }
};

export default eventStyle;

