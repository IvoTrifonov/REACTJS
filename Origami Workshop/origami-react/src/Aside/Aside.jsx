import React from 'react';
import './Aside.css';
import Link from '../shared/Link/Link';


function Aside() {
  return (
    <aside className="Aside">
      <ul>
      <Link url="#">Aside Link 1</Link>
       <Link url="#">Aside Link 2</Link>
       <Link url="#">Aside Link 3</Link>
      </ul>
    </aside>
  )
}

export default Aside;