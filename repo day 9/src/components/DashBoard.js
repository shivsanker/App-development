import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/Dashboard.css'; 
import Footer from "./Footer";
import WeekSale from "./WeeklySale";
import YearSale from "./YearlySale";
import NetProfit from "./NetProfit";
import SideBar from "./SideBar";

const DashBoard = () =>{ 

    return(
        <>
        <div style={{display: "flex"}}>
        {/* <div className="admin-nav"  style={{backgroundImage: `url("https://img.freepik.com/free-photo/starry-night-sky_1048-11828.jpg?size=626&ext=jpg&ga=GA1.1.1895619651.1695280826&semt=sph")`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <div className="admin-text1"><br></br>ADMIN</div>
            <br></br><hr color="white"></hr><br></br><br></br><br></br>
            <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/dashboard" ><div className="admin-text">DASHBOARD</div></Link>&emsp;<img alt="" src="dashboard.png" width="30px" height="30px"></img></div><br></br><br></br><br></br>
            <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/users" ><div className="admin-text">USERS</div></Link>&emsp;&emsp;&emsp;&emsp;<img alt="" src="user.png" width="30px" height="30px"></img></div><br></br><br></br><br></br>
            <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/orders" ><div className="admin-text">ORDERS</div></Link>&emsp;&emsp;&emsp;<img alt="" src="clipboard.png" width="30px" height="30px"></img></div><br></br><br></br><br></br>
            <div style={{display: "inline-flex"}}><Link style={{textDecoration: "none"}} to="/"><button className="admin-logout">LOG OUT</button></Link>&emsp;<img style={{marginTop: "250px"}} alt="" src="logout.png" height="30px" width="30px"></img></div>
        </div> */}
        <SideBar/>
        
        <div style={{marginLeft: "250px"}}>
            <h1>&emsp;DASHBOARD</h1>
            <div style={{display: "inline-flex"}}>&emsp;&emsp;
            <div className="dashboard-box"><div className="dashboard-text">Products Sold<br></br>1421<br></br></div></div>&emsp;&emsp;
            <div className="dashboard-box"><div className="dashboard-text">Net Profit<br></br>₹ 20,00,505<br></br></div></div>&emsp;&emsp;
            </div>
           <div style={{marginLeft: "30px"}}>
           <YearSale/><br></br>
           <WeekSale/><br></br>
           <NetProfit/><br></br>
           </div>
           
        </div>
        
        </div>
        <Footer/>
        <div>
        </div>
       
        </>
    )
}
export default DashBoard;










