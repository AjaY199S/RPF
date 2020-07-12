import React from "react";
import Header from "../Header/Navbar";
// import Login from "../Login/Login";
// import Home from "../Home/Home";
// import Coustumer from "../Coustumers/Coustumer";
import Bill from "../Billing/Bill";

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {/* <Login></Login> */}
        {/* <Home></Home> */}
        {/* <Coustumer></Coustumer> */}
        <Bill></Bill>
      </div>
    );
  }
}
export default Main;
