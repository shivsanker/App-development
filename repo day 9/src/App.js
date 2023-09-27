import './assets/css/App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Dashboard from './components/DashBoard';
import Orders from './components/Orders';
import Users from './components/Users';
import Buy from './components/Buy';
import Sell from './components/Sell';
import { UserProvider } from './components/context/usercontext';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import FAQ from './components/faq';
import AdminLogin from './components/adminlogin';
import Seller from './components/Seller';
import Admin from './components/Admin';
import ArtDetails from './components/ArtDetails';
import ArtWork from './components/ArtWork';


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
        <Route path="/buy" element={<Buy />}></Route>
        <Route path="/sell" element={<Sell />}></Route>
        <Route path="/privacy" element={<Privacy />}></Route>
        <Route path="/terms" element={<Terms />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/adminlogin" element={<AdminLogin />}></Route>
        <Route path="/seller" element={<Seller />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/artwork" element={<ArtWork />}></Route>
        <Route path="/adminlogin" element={<AdminLogin />}></Route>
        <Route path="/detail/:detailId" element={<ArtDetails/>}></Route>
      </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
