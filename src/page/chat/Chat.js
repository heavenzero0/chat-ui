import React, { useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import './Chat2.css';
import Input from '../../components/chat/input/Input.js';
import Messages from '../../components/chat/messages/Messages.js';

let socket;

const Chat = ({location}) => {
  const [message, setMessage] = useState({id:'', text:'', user:{}});
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState({id: 0, name: ''});
  const [room, setRoom] = useState({id: null, roomName: ''});

  const [messageText, setMessageText] = useState('');
  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    const { name } = queryString.parse(location.search);

    socket = io(ENDPOINT);
    socket.emit('create', { name });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('sendRoomDetail', ({room, user}) => {
      setUser(user);
      setRoom(room);
    });

    socket.on('aMessage', message => {
      setMessages(messages => [ ...messages, message ]);
    });
  },[]);

  const sendMessage = (event) => {
    event.preventDefault();
    const m = {id: null, roomId: room.id, text: messageText, user: user};
    socket.emit('sendClientMessage', m, () => {
      setMessageText("");
    });
  };

  return (
    <div className="outerContainer">
      <div className="container">
          <Messages messages={messages} user={user}/>
          <Input messageText={messageText} setMessageText={setMessageText} sendMessage={sendMessage} />
      </div>
      {/* <TextContainer users={users}/> */}
    </div>
  )
}

export default Chat;