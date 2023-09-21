import './assests/css/App.css';
import {BrowserRouter as Route, Routes } from 'react-router-dom'; 
import Login from './components/Login';
import SignUp from './components/SignUp';
function App() {
  return (
    
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    
    
  );
}

export default App;
