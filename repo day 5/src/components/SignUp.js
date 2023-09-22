import React from "react";
import { useNavigate } from "react-router-dom";
import Popup from "./Utils/Popup";
import "../assests/css/login.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    name: '',
    username: '',
    phonenumber: '',
    email: '',
    password: '',
    confirm: ''
   });

  const [isPopupVisible, setPopupVisible] = React.useState(false);
  const [message, setMessage] = React.useState({
        type: '',
        content: '',
        url: '',
        btn: ''
    });
    const eventHandler = (e) => {
      const { name, value } = e.target;
      setFormData({
          ...formData,
          [name]: value
      })
  }
  const showMessage = (type, content, url = '', btn = 'Got it') => {
    setMessage({ type, content, url, btn });
    setPopupVisible(true);
};
  const handlePaste = (e) => {
    e.preventDefault();
    showMessage('error', 'Restricted action');
};
const handleGotItClick = () => {
  if (message.url) {
      navigate(message.url);
  }
  setPopupVisible(false);
};
const handleSubmit = (e) => {
  e.preventDefault();
  const formValues = Object.values(formData);
  if (!formValues.some(value => !value)) {
    showMessage('success', 'Registration successful!', '/', 'Login');
} else {
    showMessage('error', 'Please fill in all fields');
}
  }
    return(
      <div className="login-bg"><br></br><br></br><br></br>
        <div className="signup-box">
            <div className="login-text">Sign Up</div><br></br>
        <form onSubmit={handleSubmit}>
            <input className="login-input" type="text" name="name" id="name" placeholder="Enter Name" onChange={eventHandler} /><br></br><br></br>
            <input className="login-input" type="text" name="username" id="username" placeholder="Enter Username" onChange={eventHandler} /><br></br><br></br>
            <input className="login-input" type="text" name="phonenumber" id="phonenumber" placeholder="Enter Phone Number" onChange={eventHandler}></input><br></br><br></br>
            <input className="login-input" type="text" name="email" id="email" placeholder="Enter Email" onChange={eventHandler} /><br></br><br></br>
            <input className="login-input" type="password" name="password" id="password" placeholder="Enter Password" onChange={eventHandler}onPaste={handlePaste}></input><br></br><br></br>
            <input className="login-input" type="password" name="confirm" id="confirm" placeholder="Confirm Password" onChange={eventHandler}onPaste={handlePaste}></input><br></br><br></br>
            <button className="login-button" type="submit">Sign Up</button><br></br>
            <h5 style={{marginLeft: "55px", fontFamily: "Open Sans"}}>Already have an account?<Link style={{textDecoration: "none", color: "black"}} to="/login">&nbsp;Login</Link></h5>
        </form>
        </div>
        {isPopupVisible && <Popup message={message} togglePopup={() => setPopupVisible(false)} handleGotItClick={handleGotItClick} />}
      </div>
    )
}
export default SignUp;