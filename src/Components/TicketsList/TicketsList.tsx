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
  status: number
}

const TicketsList = ({ list, status }: props) => {

  const setTitle = (status: number) => {
    switch(status) {
      case 0:
        return 'Waiting tickets'
      case 1:
        return 'Your tickets'
      default:
        return 'oops'
    }
  }

  return (
    <div className="TicketsList">
      <h1>{setTitle(status)}</h1>
      {list.rows.map((row, id) => 
        <Ticket key={id} ticket={row} />
      )}
    </div>
  );
}

export default TicketsList;
