import React, { useState } from 'react';
import Menu from '../Menu/Menu';
import './HeaderAccount.css';

const HeaderAccount = () => {
  const [token, setToken] = useState();

  const loginOrLogout = () => {
    return token ? <a href='/logout'><span>logout</span></a> : <a href='/login'><span>login</span></a>;
  }

  return (
    <div className="Account">
      { loginOrLogout() }
    </div>
  );
}

export default HeaderAccount;
