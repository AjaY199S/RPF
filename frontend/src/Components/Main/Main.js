import React from "react";
import Login from "../Login/Login";
import Home from "../Home/Home";

class Main extends React.Component {
  render() {
    return (
      <div className="text-center">
        <h1>Welcome to RPF</h1>
        <Login></Login>
        {/* <Home></Home> */}
      </div>
    );
  }
}
export default Main;
