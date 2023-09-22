import React from "react";
import { Link } from "react-router-dom";
const Home =()=>{
    return(
        
        <div>  <h1>Home</h1>
        <Link to="/"><button style={{height: "30px", width: "100px", backgroundColor: "black", color: "white"}}>Login</button></Link>&emsp;&emsp;&emsp;
        <Link to="/dashboard"><button style={{height: "30px", width: "100px", backgroundColor: "black", color: "white"}}>DashBoard</button></Link>
        </div>
    )
}
export default Home;