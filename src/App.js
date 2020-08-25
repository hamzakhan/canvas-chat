import React, { useState, useEffect } from 'react';
import './App.css';
//import socketIOClient from 'socket.io-client';
import ChatApp from './containers/ChatApp/ChatApp'
import Login from './components/Login/Login'
import Register from './components/Login/Register'

//const URL  = "http://localhost:4000"

function App() {
  const [route, setRoute] = useState('login');

  useEffect(() => {
    fetch('http://localhost:4000/')
    .then(response => response.json())
    .then(console.log)
  }, [])

  const onRouteChange = (route) => {
    setRoute(route);
  }

  const renderswitch = (route) => {
    switch(route){
      case 'chat':
        return <ChatApp/>
      case 'login':
      case 'logout':
        return <Login onRouteChange={onRouteChange}/>
      case 'register':
        return <Register onRouteChange={onRouteChange}/>
      default:
        return;
    }
  }
  
  return (
    <div>
      {renderswitch(route)}
    </div>
  );
}

export default App;
