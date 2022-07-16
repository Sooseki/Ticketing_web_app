import React, { useState } from 'react';
import Form from '../../Components/Form/Form';

const ChatForm = () => {
  const [data, setData] = useState();

  const formInputs = {
    inputs: [
      {      
        'name': 'topic',
        'type': 'text', 
        'placeholder': 'Give us a brief idea of you request',
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
    <div className="ChatForm">
      <div className="ChatForm-header">
        <div className="ChatForm-header-title">Start a conversation !</div>
      </div>
      <Form handleSumbit={handleSumbit} formInputs={formInputs} setData={setData} />
    </div>
  );
}

export default ChatForm;
