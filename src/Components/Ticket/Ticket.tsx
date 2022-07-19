import React from 'react';
import { ticket } from '../../Api/interfaces';

interface props {
  ticket: ticket;
  onclick: string|Function;
}

const Ticket = ({ ticket, onclick }: props) => {

  const getTicketContent = () => {
    return <>
      <div>Requête: {ticket.theme} </div>
      <div><>Date: {ticket.opening_date}</></div>
    </>
  }

  return (
    <div className="Ticket">

      {ticket && typeof(onclick) === 'string' && 
        <a href={onclick + ticket.id}>
          {getTicketContent()}
        </a>
      }
      {ticket && typeof(onclick) === 'function' &&
        <div onClick={(e) => onclick(e, ticket.id)}>
          {getTicketContent()}
        </div>
      }
    </div>
  );
}

export default Ticket;
