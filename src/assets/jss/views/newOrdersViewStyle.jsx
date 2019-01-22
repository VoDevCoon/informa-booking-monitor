const newOrdersViewStyle = {
    ordersView: {
        margin: "0 auto",
        padding: "0 30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        '@media (min-width: 768px)':{
            width: "60%"
        },
        '@media (min-width: 1440px)':{
            width: "38%"
        }
    },
    notice: {
        display: "flex",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    }
}

export default newOrdersViewStyle;