import React, {useState} from "react";
import {Link} from "react-router-dom";
const SignUp = () => {

    const[user, setUser]=useState({
        username:'',
        password:''
    })
    const handleChange = (e) =>{
        setUser({
            ...user,[e.target.name]:e.target.value
        });
    }
    const submitForm = (e) => {
        e.preventDefault();
    }
    return(
      <div>
        <form onSubmit={submitForm}>
            <label>Name:</label>
            <input type="text" name="name" id="name" onChange={handleChange} /><br></br>
            <label>Username:</label>
            <input type="text" name="username" id="username" onChange={handleChange} /><br></br>
            <label>Phone Number:</label>
            <input type="text" name="phonenumber" id="phonenumber" onChange={handleChange}></input><br></br>
            <label>Email:</label>
            <input type="text" name="email" id="email" onChange={handleChange} /><br></br>
            <label>Password:</label>
            <input type="password" name="password" id="password" onChange={handleChange}></input><br></br>
            <label>Confirm Password:</label>
            <input type="password" name="confirm" id="confirm" onChange={handleChange}></input><br></br>
            <Link to="/"><button  type="submit">Sign Up</button></Link>
        </form>
      </div>
    )
}
export default SignUp;