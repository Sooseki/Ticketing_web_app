import React, { useEffect, useState } from 'react';
import { useGetApi, usePutApi } from '../../Api/Api';
import { apiUrl, header } from '../../Api/helpers';
import { user } from '../../Api/interfaces';
import TicketsList from '../../Components/TicketsList/TicketsList';

interface props {
  user: user;
}

const MergeTickets = ({ user }: props) => {

  if (!user || user.role !== 1) {
    window.location.href = '/'
  } 

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'authorization': user.token
    }
  }

  const [getTickets, tickets, setTickets] = useGetApi(apiUrl + "/ticket/active", config)
  const [getMergedTickets] = usePutApi(apiUrl + "/ticket/merge")
  const [ticketsToMerge, setTicketsToMerge] = useState(Array<number>)
  const [disableButton, setDisableButton] = useState(true)

  const addTicketToMerge = (e: React.MouseEvent<HTMLButtonElement|MouseEvent>, ticket_id: number) => {
    const el = (e.target as Element)
    el.classList.toggle('selected')

    if(el.classList.contains('selected')) {
      setTicketsToMerge([ticket_id, ...ticketsToMerge])
    } else {
      setTicketsToMerge(current => 
        current.filter(ticket => {
          return ticket !== ticket_id
        }))
    }
  }

  const mergeTickets = (e: React.MouseEvent<HTMLButtonElement|MouseEvent>) => {
    e.preventDefault()
    getMergedTickets(ticketsToMerge, header)
    console.log(ticketsToMerge)
  }

  useEffect(() => {
    getTickets()
  }, []);

  useEffect(() => {
    setDisableButton(ticketsToMerge.length !== 2)
  }, [ticketsToMerge]);

  return (
    <div className="MergeTickets">
      {tickets &&
        <div>
          <TicketsList list={tickets} status={1} onclick={addTicketToMerge} />
          <button className={disableButton ? 'disabled' : ''} onClick={(e) => mergeTickets(e)} disabled={disableButton}>Merge these tickets !</button>
        </div>
      }
    </div>
  );
}

export default MergeTickets;
