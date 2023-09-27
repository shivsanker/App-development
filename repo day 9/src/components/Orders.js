import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import SideBar from "./SideBar";
const Orders = () =>{
    return(
        <div style={{display: "flex"}}>
        <SideBar/>
        <div style={{marginLeft: "180px"}}>
       <div style={{marginLeft: "10px"}} className="head-text">ORDERS</div><br></br>
        <table>
  <tr>
    <th>Order ID</th>
    <th>USER ID</th>
    <th>User Name</th>
    <th>mobile Number</th>
    <th>Date</th>
    <th>Art Work ID</th>
  </tr>
  <tr>
    <td>order5001</td>
    <td>peter_12</td>
    <td>peter</td>
    <td>8987466373</td>
    <td>15/09/2023</td>
    <td>art1021</td>
  </tr>
  <tr>
    <td>order5002</td>
    <td>griffin_33</td>
    <td>griffin</td>
    <td>9873679474</td>
    <td>18/09/2023</td>
    <td>art6594</td>
  </tr>
  <tr>
    <td>order5003</td>
    <td>Joe_26</td>
    <td>joe</td>
    <td>6463536373</td>
    <td>18/09/2023</td>
    <td>art5624</td>
  </tr>
  <tr>
    <td>order5004</td>
    <td>John_54</td>
    <td>john</td>
    <td>7894677334</td>
    <td>19/03/2023</td>
    <td>art7845</td>
  </tr>
  <tr>
    <td>order5005</td>
    <td>shiv_92</td>
    <td>shiv</td>
    <td>9360339845</td>
    <td>19/03/2023</td>
    <td>art2604</td>
  </tr>
  <tr>
    <td>order5006</td>
    <td>manu_67</td>
    <td>manoj</td>
    <td>9345770890</td>
    <td>20/03/2023</td>
    <td>art7648</td>
  </tr>
  </table><br></br><br></br>
  </div>
  <Footer/>
        </div>
    )
}
export default Orders;