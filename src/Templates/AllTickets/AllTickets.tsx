import React, { useEffect } from 'react';
import { useGetApi } from '../../Api/Api';
import { apiUrl } from '../../Api/helpers';
import { user } from '../../Api/interfaces';
import TicketsList from '../../Components/TicketsList/TicketsList';

interface props {
  user: user;
}

const AllTickets = ({ user }: props) => {

  if (!user || user.role !== 1) {
    window.location.href = '/'
  } 

  const waitingConfig = {
    headers: {
      'Content-Type': 'application/json',
      'authorization': user.token
    },
    params: {
      'status': 0
    }
  }

  const myTicketsConfig = {
    headers: {
      'Content-Type': 'application/json',
      'authorization': user.token
    },
    params: {
      'user_id': user.id,
      'status': 1
    }
  }

  const [getWaitingTickets, waitingTickets, setWaitingTickets] = useGetApi(apiUrl + "/ticket/waiting", waitingConfig)
  const [getMyTickets, myTickets, setMyTickets] = useGetApi(apiUrl + "/ticket/active", myTicketsConfig)
  
  useEffect(() => {
    getWaitingTickets()
    getMyTickets()
  }, []);

  console.log(myTickets)
  
  return (
    <div className="AllTickets">
      {waitingTickets && 
        <div>
          {/* 0 means waiting tickets, 1 means open, 2 means close */}
          <TicketsList list={waitingTickets} status={0} onclick={"/discussion/chat?ticket="} /> 
        </div>
      }
      {myTickets &&
        <div>
          <TicketsList list={myTickets} status={1} onclick={"/discussion/chat?ticket="} />
        </div>
      }
    </div>
  );
}

export default AllTickets;
