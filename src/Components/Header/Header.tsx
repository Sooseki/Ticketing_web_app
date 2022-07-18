import React from 'react';
import { user } from '../../Api/interfaces';
import HeaderAccount from '../HeaderAccount/HeaderAccount';
import Menu from '../Menu/Menu';
import './Header.scss';

interface props {
  user: user|undefined;
}

const Header = ({ user }: props) => {

  return (
    <header className="Header">
      <div className="Header-logo">LOGO</div>
      {user && user.role == 1 &&
        <Menu />
      }
      <HeaderAccount />
    </header>
  );
}

export default Header;
