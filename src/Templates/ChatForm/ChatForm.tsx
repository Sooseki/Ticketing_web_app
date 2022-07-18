import React, { useState } from 'react';
import { usePostApi } from '../../Api/Api';
import { apiUrl, header } from '../../Api/helpers';
import { user } from '../../Api/interfaces';
import Form from '../../Components/Form/Form';

interface props {
  user: user;
}

const ChatForm = ({ user }: props) => {

  if (!user) {
    window.location.href = '/'
  }
  
  const [data, setData] = useState({'user_id': user.id});

  const formInputs = {
    inputs: [
      {      
        'name': 'theme',
        'type': 'text', 
        'placeholder': 'Give us a brief idea of you request',
      }
    ],
    submit: {
      'value': 'Let\'s go !'
    }
  };

  const [getTicket] = usePostApi(apiUrl + "/ticket")

  const handleSumbit = async (e: React.FormEvent) => {
    e.preventDefault();    
    const postData = await getTicket(data, header)

    if(postData.status === 200) {
      window.location.href = '/discussion/chat?ticket=' + postData.data.id
    }
  }

  return (
    <div className="ChatForm">
      <div className="ChatForm-header">
        <div className="ChatForm-header-title">Start a conversation !</div>
      </div>
      <Form handleSumbit={handleSumbit} formInputs={formInputs} setData={setData} />
    </div>
  );
}

export default ChatForm;
