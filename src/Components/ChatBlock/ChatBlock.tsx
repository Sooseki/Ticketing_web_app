import React, { useState, useCallback, useEffect } from 'react';
import Form from '../Form/Form';
import Messages from '../Messages/Messages';
import { user } from '../../Api/interfaces';
import { useGetApi } from '../../Api/Api';
import { apiUrl, header } from '../../Api/helpers';

interface props {
  user: user;
  ticket_id: string;
  messages: message[]
}

interface postMessage {
  user_id: number;
  message: string;
  ticket_id: string | null;
  first_name: string;
  last_name: string;
}

interface message {
  id: number;
  date: string;
  text: string;
  ticket_id: string | null;
  first_name: string;
  role: number;
}

const ChatBlock = ({ user, ticket_id, messages }: props) => {

  const url: string = 'ws://localhost:8080/chat/?ticket=' + ticket_id 
  const [ws, setWs] = useState(new WebSocket(url)) 

  const [data, setData] = useState<postMessage>({
    user_id: user.id,
    message: "",
    ticket_id: ticket_id,
    first_name: user.first_name,
    last_name: user.last_name
  });
  const [messagesHistory, setMessagesHistory] = useState<message[]>(messages)

  useEffect(() => {  
    
    ws.onmessage = (e) => {
      const message = JSON.parse(e.data)
      setMessagesHistory([message, ...messagesHistory])
    }
  
    return () => {
      ws.onclose = () => {
        setWs(new WebSocket(url))
      }
    }
  }, [ws.onmessage, ws.onopen, ws.onclose, messagesHistory])

  const handleSumbit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (data) {
      ws.send(JSON.stringify(data))
    }
  };

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

  // const connectionStatus = {
  //   [ReadyState.CONNECTING]: 'Connecting',
  //   [ReadyState.OPEN]: 'Open',
  //   [ReadyState.CLOSING]: 'Closing',
  //   [ReadyState.CLOSED]: 'Closed',
  //   [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  // }[readyState];

  console.log(messagesHistory)
  return (
    <div className="ChatBlock">
      <div className="ChatBlock-form">
        <div className="ChatBlock-form-messages">
          <Messages messages={messagesHistory} user={user} />
        </div>
        <div className="ChatBlock-form-form">
          <Form handleSumbit={handleSumbit} formInputs={formInputs} setData={setData} />
        </div>
      </div>
      <div className="ChatBlock-controls"></div>
    </div>
  );
}

export default ChatBlock;
