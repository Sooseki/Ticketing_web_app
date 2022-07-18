import React, { useState, useCallback, useEffect } from 'react';
import Form from '../Form/Form';
import Messages from '../Messages/Messages';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { useSearchParams } from 'react-router-dom';
import { user } from '../../Api/interfaces';

interface props {
  user: user;
  ticket_id: string;
}

interface message {
  user_id: number;
  message: string;
  ticket_id: string | null;
  first_name: string;
  last_name: string;
}

const ChatBlock = ({ user, ticket_id }: props) => {

  const url: string = 'ws://localhost:8080/chat/' + ticket_id 
  const [ws, setWs] = useState(new WebSocket(url)) 

  const [data, setData] = useState<message>({
    user_id: user.id,
    message: "",
    ticket_id: ticket_id,
    first_name: user.first_name,
    last_name: user.last_name
  });
  const [messagesHistory, setMessagesHistory] = useState<message[]>([])

  useEffect(() => {  
    ws.onmessage = (e) => {
      console.log(e)
      const message = JSON.parse(e.data)
      setMessagesHistory([message, ...messagesHistory])
      console.log(messagesHistory)
    }
  
    return () => {
      ws.onclose = () => {
        console.log('WebSocket Disconnected')
        setWs(new WebSocket(url))
      }
    }
  }, [ws.onmessage, ws.onopen, ws.onclose, messagesHistory])

  const handleSumbit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (data) {
      ws.send(JSON.stringify(data))
      setMessagesHistory([data, ...messagesHistory])
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

  return (
    <div className="ChatBlock">
      <div className="ChatBlock-form">
        <div className="ChatBlock-form-messages">
          <Messages messages={messagesHistory} />
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
