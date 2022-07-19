import React from 'react';
import { usePutApi } from '../../Api/Api';
import { apiUrl, header } from '../../Api/helpers';
import { ticket, user } from '../../Api/interfaces';

interface props {
  user: user;
  ticket: ticket;
}

const CloseTicketButton = ({ user, ticket }: props) => {
  
  const [getCloseTicket] = usePutApi(apiUrl + '/ticket-user/close/' + ticket.id)
  
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const putData = await getCloseTicket({}, header)
    console.log(putData)
  }

  return (
    <div className="CloseTicketButton">
      <button onClick={(e) => handleClick(e)}>Close this ticket</button>
    </div>
  );
}

export default CloseTicketButton;
