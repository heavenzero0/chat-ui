import React from 'react'

import Room from './room/room.js';
import './rooms.css';

const rooms = ({rooms, atClick}) => {

  
  return (
    <div className="borderRight">
      {rooms.map((room, i) => <div key={i} onClick={() => atClick(room.id)} ><Room  room={room} /></div>)}
    </div>
  )
}

export default rooms;
