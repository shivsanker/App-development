import React from "react";
import { Link } from "react-router-dom";
const Login = () =>{
    const [formdata, setFormdata]=React.useState(
        {
           username:"",
           password:"" 
        }
    )
    const handleOnChange = (e)=>{
       const[name,value]=[e.target.name,e.target.value];
       setFormdata({
        formdata,
        [name]: value
       })
    }
    const submitform = (e) =>
    {
        e.preventDefault();
        console.log(formdata);

    }
    return(
        <div>
        <form >
        <input type="text" name="username" id="username"/>
        <input type="text" name="password" id="password" />
        <Link to="/signup"><button type="Submit">Login</button></Link>
        
        </form>
        </div>
        
    )
 }
 export default Login;