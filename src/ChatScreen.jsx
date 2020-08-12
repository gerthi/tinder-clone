import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css';

function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      name: 'Ellen',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKyTrmu-f9F0cE5QNl0n5PeFA5GlTp4sDKVg&usqp=CAU',
      message: 'Whats up 😎'
    },
    {
      name: 'Ellen',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKyTrmu-f9F0cE5QNl0n5PeFA5GlTp4sDKVg&usqp=CAU',
      message: 'How r u?'
    },
    {
      message: 'Hellow Ellen!'
    }
  ])

  return (
    <div className="chatScreen">
      <p className="chatTitle">You matched with Ellen on 10/10/2020</p>
      {messages.map(message => (
        message.name ? (
        <div className='message message__stranger'>
          <Avatar className="chat__image" src={message.url}/>
          <p className="stranger">{message.message}</p>
        </div>
        ) : (
        <div className='message message__user'>
          <p className="user">{message.message}</p>
        </div>
        )
      ))}
    </div>
  )
}

export default ChatScreen
