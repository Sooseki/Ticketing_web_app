import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { user } from '../Api/interfaces';
import Header from '../Components/Header/Header';
import AllTickets from '../Templates/AllTickets/AllTickets';
import Chat from '../Templates/Chat/Chat';
import ChatForm from '../Templates/ChatForm/ChatForm';
import Login from '../Templates/Login/Login';
import MergeTickets from '../Templates/MergeTickets/MergeTickets';
import Register from '../Templates/Register/Register';
import './App.scss';


const App = () => {

  const [user, setUser] = useState<user>()

  useEffect(() => {
    const userInfo = localStorage.getItem('user')
    if (userInfo) {
      setUser(JSON.parse(userInfo))
    }
  }, [])

  return (
    <div className="App">
      <Header user={user} />
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {user &&
          <Route>
            <Route path="/discussion">
              <Route path="start" element={<ChatForm user={user} />}></Route>
              <Route path="chat" element={<Chat user={user} />}></Route>
            </Route>
            <Route path="/tickets">
              <Route path="all" element={<AllTickets user={user} />} />
              <Route path="merge" element={<MergeTickets user={user} />} />
            </Route>
          </Route>
        }
      </Routes>
    </div>
  );
}

export default App;
