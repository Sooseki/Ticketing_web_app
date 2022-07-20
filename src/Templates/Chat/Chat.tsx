import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetApi } from '../../Api/Api';
import { apiUrl } from '../../Api/helpers';
import { user } from '../../Api/interfaces';
import AssignTicketButton from '../../Components/AssignTicketButton/AssignTicketButton';
import ChatBlock from '../../Components/ChatBlock/ChatBlock';
import CloseTicketButton from '../../Components/CloseTicketButton/CloseTicketButton';

interface props {
  user: user;
}

const Chat = ({ user }: props) => {

  if (!user) {
    window.location.href = '/'
  } 

  const [searchParams, setSearchParams] = useSearchParams()
  const ticket_id = searchParams.get('ticket')

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'authorization': user.token
    }
  }

  const [getTicket, ticket, setTicket] = useGetApi(apiUrl + "/ticket/" + ticket_id, config)
  const [getMessages, messages, setMessages] = useGetApi(apiUrl + '/message/all/' + ticket_id, config)

  useEffect(() => {
    getTicket()
    getMessages()
  }, []);

  return (
    <div className="Chat">
      {user && ticket_id && messages && messages.rows &&
        <div>
          <ChatBlock ticket_id={ticket_id} user={user} messages={messages.rows}/>
          <div className="Chat-controls"></div>
        </div>
      }
      {user && user.role == 1 && ticket && ticket.status == 0 &&
        <AssignTicketButton ticket={ticket} user={user} />
      }
      {user && user.role == 1 && ticket && ticket.status == 1 &&
        <CloseTicketButton ticket={ticket} user={user} />
      }
    </div>
  );
}

export default Chat;
