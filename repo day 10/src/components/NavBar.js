import React from "react";
import "../assets/css/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () =>{
    return(
        <div>
            <div className="nav-bar">
                <Link style={{textDecoration: "none"}} to="/home"><div className="nav-text">Home</div></Link>
                {/* <div style={{marginLeft:"900px"}} className="nav-text">Home</div> */}
                <Link style={{textDecoration: "none"}} to="/buy"><div className="nav-text">Buy</div></Link>
                <Link style={{textDecoration: "none"}} to="/sell"><div className="nav-text">Sell</div></Link>
                <Link style={{textDecoration: "none"}} to="/dashboard"><div className="nav-text">DashBoard</div></Link>
                <div style={{marginLeft: "700px"}}>
                <Link style={{textDecoration: "none"}} to="/signup"><button className="log-btn">Sign Up</button></Link>
                <Link style={{textDecoration: "none"}} to="/"><button className="log-btn">Login</button></Link>
                </div>
                </div>
        </div>
    )
}
export default NavBar;