import React from 'react';
import { ticket } from '../../Api/interfaces';
import Ticket from '../Ticket/Ticket';

interface props {
  list: {
    page: number;
    limit: number;
    total: number;
    rows: ticket[];
  };
  status: number;
  onclick: string|Function;
}

const TicketsList = ({ list, status, onclick }: props) => {

  const setTitle = (status: number) => {
    switch(status) {
      case 0:
        return 'Waiting tickets'
      case 1:
        return 'Active tickets'
      default:
        return 'oops'
    }
  }

  return (
    <div className="TicketsList">
      <h1>{setTitle(status)}</h1>
      {list.rows.map((row, id) => 
        <Ticket key={id} ticket={row} onclick={onclick} />
      )}
    </div>
  );
}

export default TicketsList;
