import React, { useEffect } from 'react';
import { useGetApi } from '../../Api/Api';
import { apiUrl } from '../../Api/helpers';
import { user } from '../../Api/interfaces';
import TicketsList from '../../Components/TicketsList/TicketsList';
import ChatForm from '../ChatForm/ChatForm';

interface props {
  user: user;
}

const UserTickets = ({ user }: props) => {

  if (!user || user.role !== 0) {
    window.location.href = '/'
  } 

  const myTicketsConfig = {
    headers: {
      'Content-Type': 'application/json',
      'authorization': user.token
    },
    params: {
      'user_id': user.id
    }
  }

  const [getMyTickets, myTickets, setMyTickets] = useGetApi(apiUrl + "/ticket/active", myTicketsConfig)
  
  useEffect(() => {
    getMyTickets()
  }, []);

  console.log(myTickets)

  return (
    <div className="UserTickets">
      <ChatForm user={user} ></ChatForm>
      {myTickets &&
        <TicketsList list={myTickets} status={1} onclick={"/discussion/chat?ticket="} ></TicketsList>
      }
    </div>
  );
}

export default UserTickets;
