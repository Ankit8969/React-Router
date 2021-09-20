import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <span>
          <Link to="/">Testing</Link>
        </span>
        <span>
          <Link to="/login">Login</Link>
        </span>
        <span>
          <Link to="/register">Register</Link>
        </span>
      </div>
    );
  }
}

export default Navbar;
