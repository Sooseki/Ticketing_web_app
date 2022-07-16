import React, { useState } from 'react';
import { usePostApi } from '../../Api/Api';
import { apiUrl } from '../../Api/helpers';
import Form from '../../Components/Form/Form';

const Register = () => {
  const [data, setData] = useState({});

  const formInputs = {
    inputs: [
      {      
        'name': 'first_name',
        'type': 'text', 
        'placeholder': 'First Name',
      },
      {      
        'name': 'last_name',
        'type': 'text', 
        'placeholder': 'Name',
      },
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

  const [getUser] = usePostApi(apiUrl + "/user");

  const handleSumbit = async (e: React.FormEvent) => {
    e.preventDefault()
    const postData = await getUser(data)
  }

  return (
    <div className="Register">
      <div className="Register-header">
        <div className="Register-header-title">Create your Accout !</div>
        <div className="Register-header-sub-title">And start talking with one of our tech</div>
      </div>
      <Form handleSumbit={handleSumbit} formInputs={formInputs} setData={setData} />
      <a className="Register-link" href="/login">Already registered ? Login</a>
    </div>
  );
}

export default Register;
