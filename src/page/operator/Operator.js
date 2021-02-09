import React, {useState, useEffect} from 'react';
import axios from 'axios';
import io from "socket.io-client";

import Chat from './chat/Chat.js';
import Rooms from './rooms/rooms.js';
import './Operator.css';

let socket;

const Operator = () => {
  let api = 'http://localhost:5000';
  const ENDPOINT = 'http://localhost:5000';
  const [rooms, setRooms] = useState([]);
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState({id: 100, name: 'admin'});

  const [messageText, setMessageText] = useState('');
  const [room, setRoom] = useState({id: null, roomName: ''});

  useEffect(() => {
    socket = io(ENDPOINT);
  }, [ENDPOINT]);

  // useEffect(() => {
  //   if(room.id) {
  //     socket.emit('adminJoin', {room});
  //   }
  // },[room]);

  useEffect(() => {
    const fetchRoom = async() => {
      const res = await axios(`${api}/rooms`);
      setRooms(res.data);
    };
    
    fetchRoom();
  }, [api]);

  useEffect(() => {
    socket.on('aMessage', message => {
      // const isRoom = room.id === message.roomId;
      // console.log(isRoom);
      // if(isRoom){
        setMessages(messages => [ ...messages, message ]);
      // }
    });
}, []);


  const fetchMessage = async(id) => {
    const res = await axios(`${api}/messages?room=${id}`);
    const room = rooms.find((room) => room.id === id);
    socket.emit('adminJoin', {room});

    setRoom(room);
    setMessages(res.data);
  };

  const sendMessage = (event) => {
    event.preventDefault();

    const m = {id: null, roomId: room.id, text: messageText, user: user};
    socket.emit('sendAdminMessage', m, () => {
      setMessageText("");
    });
  };


  // console.log(messages);
  return (
    <div className="operatorContainer">
      <Rooms rooms={rooms} atClick={fetchMessage}/>
      <Chat messages={messages} user={user} messageText={messageText} setMessageText={setMessageText} sendMessage={sendMessage}/>
    </div>
  )
}

export default Operator;