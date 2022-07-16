import React, { useState } from 'react';
import Form from '../../Components/Form/Form';
import Messages from '../../Components/Messages/Messages';

const Chat = () => {
  const [data, setData] = useState();

  const formInputs = {
    inputs: [
      {      
        'name': 'message',
        'type': 'textarea', 
        'placeholder': 'Write here ...',
      }
    ],
    submit: {
      'value': 'send'
    }
  };

  const handleSumbit = (e: React.FormEvent) => {
    e.preventDefault();
  }

  return (
    <div className="Chat">
      <div className="Chat-form">
        <div className="Chat-form-messages">
          <Messages />
        </div>
        <div className="Chat-form-form">
          <Form handleSumbit={handleSumbit} formInputs={formInputs} setData={setData} />
        </div>
      </div>
      <div className="Chat-controls"></div>
    </div>
  );
}

export default Chat;
