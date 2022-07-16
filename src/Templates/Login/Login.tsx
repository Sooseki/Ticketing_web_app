import React, { useState } from 'react';
import Form from '../../Components/Form/Form';

const Login = () => {
  const [data, setData] = useState();

  const formInputs = {
    inputs: [
      {      
        'name': 'email',
        'type': 'email', 
        'placeholder': 'Email',
      },
      {      
        'name': 'password',
        'type': 'password', 
        'placeholder': 'Password',
      }
    ],
    submit: {
      'value': 'Let\'s go !'
    }
  };

  const handleSumbit = (e: React.FormEvent) => {
    e.preventDefault();
  }

  return (
    <div className="Login">
      <div className="Login-header">
        <div className="Login-header-title">Login to your Accout !</div>
      </div>
      <Form handleSumbit={handleSumbit} formInputs={formInputs} setData={setData} />
      <a className="Login-link" href="/">New to this site ? Create an account</a>
    </div>
  );
}

export default Login;
