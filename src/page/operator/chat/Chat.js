import React from 'react'

import './chat.css';
import Input from '../../../components/chat/input/Input.js';
import Messages from '../../../components/chat/messages/Messages.js';

const Chat = ({messages, user,  setMessageText, messageText, sendMessage, isBot}) => {

  let cne = <Input messageText={messageText} setMessageText={setMessageText} sendMessage={sendMessage} />;
  if(isBot){
    cne = <h1>BOT IS CHATTING TO HUMAN</h1>
  }

  return (
    messages.length !== 0 
    ? (
    <div className="chatContainer">
      <Messages messages={messages} user={user}/>
      {cne}
    </div>) 
    : (
    <div className="chatContainer">
      NO Messages
    </div>)
  )
}

export default Chat
