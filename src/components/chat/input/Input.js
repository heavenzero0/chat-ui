import React from 'react';

import './Input.css';

const Input = ({ setMessageText, messageText, sendMessage }) => {
  return (
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="Type a message..."
        value={messageText}
        onChange={({ target: { value } }) =>  setMessageText(value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
      />
      <button 
        className="sendButton" 
        onClick={e => sendMessage(e)}
        >Send
      </button>
    </form>
  );
}



export default Input;