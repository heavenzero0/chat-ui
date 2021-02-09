import React from 'react'

import './room.css';

const room = ({room}) => {

  return (
    <div className="roomContainer">
      {room.roomName}
    </div>
  )
}

export default room
