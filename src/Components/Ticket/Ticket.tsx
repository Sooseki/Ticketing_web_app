import React from 'react';

interface props {
  ticket: {
    id: number; 
    opening_date: Date; 
    closing_date: Date | null;
    status: number;
    description: string;
    theme: string;
  };
}

const Ticket = ({ ticket }: props) => {

  return (
    <div className="Ticket">
      <a href={"/discussion/chat?ticket=" + ticket.id}>
        {ticket && 
          <>
            <div>Requête: {ticket.theme} </div>
            <div><>Date: {ticket.opening_date}</></div>
          </>
        }
      </a>
    </div>
  );
}

export default Ticket;
