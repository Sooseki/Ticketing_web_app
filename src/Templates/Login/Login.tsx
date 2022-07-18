import React, { useState } from 'react';
import { usePostApi } from '../../Api/Api';
import { apiUrl } from '../../Api/helpers';
import Form from '../../Components/Form/Form';

const Login = () => {
  const [data, setData] = useState({});
  const [message, setMessage] = useState('');

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

  const [getUser] = usePostApi(apiUrl + "/user/login")

  const handleSumbit = async (e: React.FormEvent) => {
    e.preventDefault()
    const postData = await getUser(data)

    if(postData.status !== 200) {
      setMessage('There\'s been an error')
    } else {
      setMessage('')
      localStorage.setItem('user', JSON.stringify(postData.data))

      if (postData.data.role == 1) {
        window.location.href = '/tickets/all'
        return
      }
      window.location.href = '/discussion/start'
      return
    }

  }

  return (
    <div className="Login">
      <div className="Login-header">
        <div className="Login-header-title">Login to your Accout !</div>
      </div>
      {message && 
      <div className="Login-error">{ message }</div>
      }
      <Form handleSumbit={handleSumbit} formInputs={formInputs} setData={setData} />
      <a className="Login-link" href="/">New to this site ? Create an account</a>
    </div>
  );
}

export default Login;
