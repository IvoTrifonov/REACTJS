import React from 'react';
import './Navigation.css';
import Link from '../shared/Link/Link';


function Navigation() {
  return (
    <nav className="Navigation">
       <Link url="#">
         <img className="logo" src="blue-origami-bird.png" alt="my-app-logo"/>
       </Link>
       <Link url="#">Link 1</Link>
       <Link url="#">Link 2</Link>
    </nav>
  )
}

export default Navigation;