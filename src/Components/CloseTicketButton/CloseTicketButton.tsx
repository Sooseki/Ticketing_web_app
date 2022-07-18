import React from 'react';
import { usePostApi } from '../../Api/Api';
import { apiUrl, header } from '../../Api/helpers';
import { ticket, user } from '../../Api/interfaces';

interface props {
  user: user;
  ticket: ticket;
}

const CloseTicketButton = ({ user, ticket }: props) => {
  
  // const [getAssign] = usePostApi(apiUrl + '/ticket-user/' + ticket.id)

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('ok')
  }
  
  // const handleClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   const postData = await getAssign({
  //       user_id: user.id,
  //       ticket_id: ticket.id
  //     }, header
  //   )
  //   console.log(postData)
  // }

  return (
    <div className="CloseTicketButton">
      <button onClick={(e) => handleClick(e)}>Close this ticket</button>
    </div>
  );
}

export default CloseTicketButton;
