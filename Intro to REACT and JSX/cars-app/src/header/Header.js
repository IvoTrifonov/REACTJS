import React, { Component } from 'react';
import Navigation from './navigation/Navigation';

class Header extends Component {
  render() {
    return (
      <header className="site-header">
        <h2>Cars-App</h2>
        <Navigation isLoggedin={this.props.isLoggedin}/>
      </header>
    )
  }
}

export default Header;