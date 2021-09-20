import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <div>
        <h2>Login</h2>
        <ul>
          <Link to="/login/first">
            <li>First</li>
          </Link>
          <Link to="/login/second">
            <li>Second</li>
          </Link>
          <Link to="/login/third">
            <li>Third</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Login;
