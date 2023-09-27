import React from "react";
import CanvasJSReact from '@canvasjs/react-charts';
import { useState } from "react";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const YearSale = () =>{
    const  yearlySale = {
        animationEnabled: true,
        theme:'light2',
        title:{
            text: "Art Work Sold Year 2022",
        },
        axisX: {
            title: "Month",
            reversed: false,
        },
        axisY: {
            title: "Number of Art Work Sold",
            includeZero: true,
            
        },
        data: [{
            type: "line",
            dataPoints: [
                { y:  1010, label: "January"},
                { y:  2045, label: "Febraury" },
                { y:  1142, label: "March" },
                { y:  1801, label: "April" },
                { y:  2004, label: "May" },
                { y:  2550, label: "June" },
                { y:  701, label: "July" },
                { y:  901, label: "August"},
                { y:  1001, label: "September" },
                { y:  1171, label: "October" },
                { y:  2001, label: "November" },
                { y:  2603, label: "December" }
            ]
        }]
    }
    const [data,setData]=useState({
        totalProducts: 18930,
    })
    return(
        <>
     <div className="line"style={{ maxWidth: "1700px",  marginLeft: "100px" }} >
     <CanvasJSChart options = {yearlySale} />
     </div>
        <div style={{textAlign: "center", fontSize: "20px", fontFamily: "Catamaran"}}>Total Products Sold - Year 2022<br></br>{data.totalProducts}</div><br></br>
     </>
    )
}
export default YearSale;