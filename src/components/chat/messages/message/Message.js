import React from 'react'

import './message.css';

const Message = ({user, message}) => {
  let isSentByCurrentUser = false;
  if(`${user.id}` === `${message.user.id}`) {
    isSentByCurrentUser = true;
  }
 
  return (
    isSentByCurrentUser 
    ? (
    <div>
      <div className="messageContainer justifyEnd">
        <div className="messageBox backgroundBlue">
          <p className="messageText colorDark">{message.user.name}</p>
        </div>
        <p className="sentText pl-10 ">{message.text}</p>
      </div>
    </div>)
    : (
    <div>
      <div className="messageContainer justifyStart">
        <div className="messageBox backgroundLight">
          <p className="messageText colorDark">{message.user.name}</p>
        </div>
        <p className="sentText pl-10 ">{message.text}</p>
      </div>
    </div>)
  )
}

export default Message
