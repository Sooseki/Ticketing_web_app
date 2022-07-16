import React from 'react';
import HeaderAccount from '../HeaderAccount/HeaderAccount';
import Menu from '../Menu/Menu';
import './Header.scss';

const Header = () => {
  return (
    <header className="Header">
      <div className="Header-logo">LOGO</div>
      <Menu />
      <HeaderAccount />
    </header>
  );
}

export default Header;
