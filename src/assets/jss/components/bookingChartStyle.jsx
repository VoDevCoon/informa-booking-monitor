const bookingChartStyle = {
    dataGrid: {
        display: "flex",
        justifyContent: "center",
        alignItems: "stratch",
        flexDirection: "column"
    },
    data: {
        "& thead, tbody": {
            display: "block",
            "& tr": {
                tableLayout: "fixed",
                width: "100%",
                display: "table",
                "& th, td": {
                    textAlign: "center"
                },
            },
        },
        "& thead th": {
            boxShadow: "0 2px 5px rgba(189,189,192,0.2)",
            textTransform: "uppercase",
            background: "#eee"
        },
        "& tbody": {
            maxHeight: "200px",
            overflow: "scroll",
            "& tr:nth-child(even)": {
                backgroundColor: "#f2f2f2"
            }
        },
        stats: {
            textAlign: "right"
        }
    }
}

export default bookingChartStyle;
