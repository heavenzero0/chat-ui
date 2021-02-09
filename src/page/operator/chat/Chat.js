import React from 'react'

import './chat.css';
import Input from '../../../components/chat/input/Input.js';
import Messages from '../../../components/chat/messages/Messages.js';

const Chat = ({messages, user,  setMessageText, messageText, sendMessage}) => {
  
  return (
    messages.length !== 0 
    ? (
    <div className="chatContainer">
      <Messages messages={messages} user={user}/>
      <Input messageText={messageText} setMessageText={setMessageText} sendMessage={sendMessage} />
    </div>) 
    : (
    <div className="chatContainer">
      NO Messages
    </div>)
  )
}

export default Chat
