import './assests/css/App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Dashboard from './components/DashBoard';
import Orders from './components/Orders';
import Users from './components/Users';
import { UserProvider } from './components/context/UserContext';
function App() {
  return (
    <div>
      <UserProvider>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/users" element={<Users />}></Route>
      </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
