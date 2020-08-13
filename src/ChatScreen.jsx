import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css';

function ChatScreen() {
  const [input, setInput] = useState('');
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
  
  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput('');
  };

  return (
    <div className="chatScreen">
      <p className="chatTitle">You matched with Ellen on 10/10/2020</p>
      {messages.map(message => (
        message.name ? (
        <div className='chatScreen__message'>
          <Avatar className="chat__image" src={message.url} />
          <p className="chatScreen__text">{message.message}</p>
        </div>
        ) : (
        <div className='chatScreen__message'>
          <p className="chatScreen__textUser">{message.message}</p>
        </div>
        )
      ))}
      <div>
        <form className="chatScreen__input">
          <input 
            value={input}
            onChange={e=> setInput(e.target.value)}
            type="text" 
            className="chatScreen__inputField" 
            placeholder="Type a message..."/>
          <button 
            type="submit"
            onClick={e => handleSend(e)}
            className="chatScreen__inputButton">
          SEND
          </button>
        </form>
      </div>
    </div>
  )
}

export default ChatScreen
