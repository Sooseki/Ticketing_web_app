import React from 'react';
import './Menu.scss';

const Menu = () => {
  return (
    <div className="Menu">
      <ul>
        <li>
          <a>All messages</a>
        </li>
        <li>
          <a>Merge tickets</a>
        </li>
        <li>
          <a>My tickets</a>
        </li>
        <li>
          <a>New messages</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
