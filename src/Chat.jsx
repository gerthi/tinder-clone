import React from 'react'
import './Chat.css';

import Avatar from "@material-ui/core/Avatar";
import { Link } from 'react-router-dom';

function Chat({name, message, profilePic, timestamp}) {
  return (
    <Link to="/">
    <div className="chat">
      <Avatar className="chat__image" src={profilePic}/>
      <div className="chat__content">
        <h3>{name}</h3>
        <p className="chat__message">{message}</p>
      </div>
      <p className="chat__timestamp">{timestamp}</p>
    </div>
    </Link>
  )
}

export default Chat