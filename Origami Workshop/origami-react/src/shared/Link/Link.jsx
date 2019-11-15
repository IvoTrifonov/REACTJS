import React from 'react';
import './Link.css'

function Link({ children, url }) {
  return (
    <li className="listItem">
      <a href="#">{children}</a>
    </li>
  )
}

export default Link;