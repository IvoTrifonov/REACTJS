import React from 'react';
import './Footer.css';
import Link from '../shared/Link/Link';

function Footer() {
  return (
    <nav className="Footer">
      <ul>
        <Link url="#">Link 1</Link>
        <Link url="#">Link 2</Link>
        <Link url="#">Link 3</Link>
        <Link url="#">Link 4</Link>
        <Link url="#">
          <img className="logo" src="blue-origami-bird-flipped.png" alt="my-app-logo"/>
        </Link>
      </ul>
    </nav>
  )
}

export default Footer;