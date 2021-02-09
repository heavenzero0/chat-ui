import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './message/Message.js';
import './messages.css';

const Messages = ({messages, user}) => {
  
  return (
    <div>
      <ScrollToBottom className="messages">
        {messages.map((message, i) => <div key={i}><Message user={user} message={message}/></div>)}
      </ScrollToBottom>
    </div>
  )
}

export default Messages
