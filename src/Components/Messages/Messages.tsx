import React, { useState } from 'react';

interface props {
  messages: {
    user_id: number;
    message: string;
    ticket_id: string | null;
    first_name: string;
    last_name: string;
  }[]
}

const Messages = ({messages}: props) => {
  return (
    <div className="Messages">
      <ul>
        {messages.slice(0).reverse().map((message, id) => (
          <li key={id}>{message.first_name} : {message.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default Messages;
