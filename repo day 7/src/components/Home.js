import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
const Home =()=>{
    return(
        
        <div>
            <div style={{backgroundImage: `url("bg3.jpg")`, height:"100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <NavBar />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Footer />
            </div>
            <Footer/>
        </div>
    )
}
export default Home;