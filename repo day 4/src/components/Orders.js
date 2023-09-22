import React from "react";
import { Link } from "react-router-dom";
const Orders = () =>{
    return(
        <div style={{display: "flex"}}>
        <div className="admin-nav" style={{backgroundImage: `url("https://img.freepik.com/free-photo/starry-night-sky_1048-11828.jpg?size=626&ext=jpg&ga=GA1.1.1895619651.1695280826&semt=sph")`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <div className="admin-text1"><br></br>ADMIN</div>
            <br></br><hr color="white"></hr><br></br><br></br><br></br>
            <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/dashboard" ><div className="admin-text">DASHBOARD</div></Link>&emsp;<img alt="" src="dashboard.png" width="30px" height="30px"></img></div><br></br><br></br><br></br>
            <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/users" ><div className="admin-text">USERS</div></Link>&emsp;&emsp;&emsp;&emsp;<img alt="" src="user.png" width="30px" height="30px"></img></div><br></br><br></br><br></br>
            <div style={{display: "inline-flex", marginLeft: "20px"}}><Link style={{textDecoration: "none"}} to="/orders" ><div className="admin-text">ORDERS</div></Link>&emsp;&emsp;&emsp;<img alt="" src="clipboard.png" width="30px" height="30px"></img></div><br></br><br></br><br></br>
            <div style={{display: "inline-flex"}}><Link style={{textDecoration: "none"}} to="/"><button className="admin-logout">LOG OUT</button></Link>&emsp;<img style={{marginTop: "250px"}} alt="" src="logout.png" height="30px" width="30px"></img></div>
        </div>
       <div style={{marginLeft: "250px"}}><h2>Orders</h2>
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
        </div>
    )
}
export default Orders;