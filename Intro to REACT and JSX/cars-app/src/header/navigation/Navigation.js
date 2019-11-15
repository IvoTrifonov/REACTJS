import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <Router>
        <nav className="site-nav">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/rentacar">Rent a car</Link></li>
            <li><Link to="/dealers">Dealers</Link></li>

            { this.props.isLoggedin
              ? <li><Link to="/logout">Logout</Link></li>
              : <React.Fragment>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
              </React.Fragment>
            }
          </ul>
        </nav>
      </Router>
    )
  }
}

export default Navigation;