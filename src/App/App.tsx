import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from '../Components/Header/Header';
import Chat from '../Templates/Chat/Chat';
import ChatForm from '../Templates/ChatForm/ChatForm';
import Login from '../Templates/Login/Login';
import Register from '../Templates/Register/Register';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/discussion">
          <Route path="start" element={<ChatForm />}></Route>
          <Route path=":id" element={<Chat />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
