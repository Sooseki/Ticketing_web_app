import React from 'react';
import './Menu.scss';

const Menu = () => {
  return (
    <div className="Menu">
      <ul>
        <li>
          <a href="/tickets/all">All messages</a>
        </li>
        <li>
          <a href="/tickets/merge">Merge tickets</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
