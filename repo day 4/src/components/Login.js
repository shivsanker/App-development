import React from "react";
import { Link } from "react-router-dom";
import "../assests/css/login.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useUser } from "./context/UserContext";
import { useState } from "react";
import Popup from "./Utils/Popup";
import { login } from "./redux/userslice";
const Login = () =>{
  const dispatch = useDispatch();
  const { login: userLogin } = useUser();

  const[formData, setFormData]= useState({
    username:'',
    password:''
  });

  const [isPopupVisible, setPopupVisible] = React.useState(false);
  const [message, setMessage] = React.useState({
    type: '',
    content: '',
    url: '',
    btn: ''
  });

  const eventHandler = (e) =>{
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const showMessage = (type, content, url = '', btn = 'Got it') => {
    setMessage({type, content, url, btn});
    setPopupVisible(true);
  }
  const handlePaste = (e) =>{
    e.preventDefault();
    showMessage('error', 'Restricted action');
  };
  const handleGotItClick = () =>{
    if(message.url){
      navigate(message.url);
    }
    setPopupVisible(false);
  };
const navigate = useNavigate();

  const submitLoginForm = (e) =>{
    e.preventDefault();
    const formValues = Object.values(formData);
    if(!formValues.some(value => !value)){
      showMessage('sucess', 'Login successful !', '/home');
      userLogin();
      dispatch(login({username: formData.username, password: formData.password}));
    } else {
      showMessage('error', 'Please fill in all the fields');
    }
  };
    
    return(
        <div className="login-bg"><br></br><br></br><br></br><br></br><br></br><br></br>
            <div className="login-box">
                <div className="login-text">Login</div><br></br>
        <form onSubmit={submitLoginForm}>
        <input  className="login-input" type="text" name="username" id="username" placeholder="User Name" onChange={eventHandler}/><br></br><br></br>
        <input className="login-input" type="text" name="password" id="password" placeholder="Password" onChange={eventHandler} onPaste={handlePaste}/><br></br><br></br>
        <button className="login-button" type="Submit">Login</button><br></br>
        <h5 style={{marginLeft: "55px", fontFamily: "Open Sans"}}>Doesn't have an account?<Link style={{textDecoration: "none", color: "black"}} to="/signup">&nbsp;Sign Up</Link></h5>
        
        </form>
            </div>
        {isPopupVisible && <Popup message={message} togglePopup={() => setPopupVisible(false)} handleGotItClick={handleGotItClick} />}
        </div>
        
    )
 }
 export default Login;