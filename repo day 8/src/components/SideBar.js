import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/Dashboard.css'; 

const SideBar = () =>{
    return(
        <>
        {/* <div style={{backgroundImage: `url("adminbg1.jpg")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} className="admin-nav">
        <div className="admin-text1"><br></br>ADMIN</div><hr color="ffffffcf" width="190px" size="1"></hr>
        <br></br><br></br><br></br><br></br>
        <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/dashboard" ><button className="admin-textbox">DASHBOARD</button></Link>&emsp;<img alt="" src="dashboard.png" width="30px" height="30px"></img></div><br></br><br></br>
        <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/admin" ><button className="admin-textbox">ADMIN</button></Link>&emsp;<img alt="" src="order.png" width="30px" height="30px"></img></div><br></br><br></br>
        <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/users" ><button className="admin-textbox">USERS</button></Link>&emsp;<img alt="" src="group.png" width="30px" height="30px"></img></div><br></br><br></br>
        <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/orders" ><button className="admin-textbox">ORDERS</button></Link>&emsp;<img alt="" src="order.png" width="30px" height="30px"></img></div><br></br><br></br>
        <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/seller" ><button className="admin-textbox">SELLER</button></Link>&emsp;<img alt="" src="order.png" width="30px" height="30px"></img></div><br></br><br></br>
        <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/artwork" ><button className="admin-textbox">ART WORK</button></Link>&emsp;<img alt="" src="order.png" width="30px" height="30px"></img></div><br></br><br></br>
        <div style={{display: "inline-flex"}}><Link style={{textDecoration: "none"}} to="/"><button className="admin-logout">LOG OUT</button></Link></div>
        </div> */}
        <div className="admin-nav"  style={{backgroundImage: `url("https://img.freepik.com/free-photo/starry-night-sky_1048-11828.jpg?size=626&ext=jpg&ga=GA1.1.1895619651.1695280826&semt=sph")`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <div className="admin-text1"><br></br>ADMIN</div>
            <br></br><hr color="white"></hr><br></br><br></br><br></br>
            <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/dashboard" ><div className="admin-text">DASHBOARD</div></Link>&emsp;<img style={{marginTop: "-2px"}} alt="" src="dashboard.png" width="30px" height="30px"></img></div><br></br><br></br><br></br>
            <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/users" ><div className="admin-text">USERS</div></Link>&emsp;&emsp;&emsp;&emsp;<img style={{marginTop: "-2px"}} alt="" src="user.png" width="30px" height="30px"></img></div><br></br><br></br><br></br>
            <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/orders" ><div className="admin-text">ORDERS</div></Link>&emsp;&emsp;&emsp;<img style={{marginTop: "-2px"}} alt="" src="clipboard.png" width="30px" height="30px"></img></div><br></br><br></br><br></br>
            <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/seller" ><div className="admin-text">SELLER</div></Link>&emsp;&emsp;&emsp;<img style={{marginTop: "-2px"}} alt="" src="clipboard.png" width="30px" height="30px"></img></div><br></br><br></br><br></br>
            <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/artwork" ><div className="admin-text">ART WORK</div></Link>&emsp;&emsp;&emsp;<img style={{marginTop: "-2px"}} alt="" src="clipboard.png" width="30px" height="30px"></img></div><br></br><br></br><br></br>
            <div style={{display: "inline-flex"}}><Link style={{textDecoration: "none"}} to="/"><button className="admin-logout">LOG OUT</button></Link>&emsp;<img style={{marginTop: "250px"}} alt="" src="logout.png" height="30px" width="30px"></img></div>
            {/* <Link style={{textDecoration: "none"}}  to="/"><button className="admin-logout">LOGOUT</button></Link> */}
        </div>
        </>
    )
}
export default SideBar;