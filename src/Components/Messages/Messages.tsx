import React, { useState } from 'react';
import { user } from '../../Api/interfaces';

interface props {
  messages: {
    id: number;
    date: string;
    text: string;
    ticket_id: string | null;
    first_name: string;
    role: number;
  }[];
  user: user;
}

const Messages = ({messages, user}: props) => {
  console.log(user, messages)
  return (
    <div className="Messages">
      <ul>
        {messages && messages.map((message, id) => (
          <li key={id} className={message.role == user.role ? 'myMessage' : 'correspondantMessage'}>{message.first_name} : {message.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Messages;
