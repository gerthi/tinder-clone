import React from 'react';
import Chat from './Chat.jsx';
import './Chats.css';

function Chats() {
  return (
    <div className="chatlist">
      <h1>Messages</h1>
      <Chat
        name="Linda"
        message="Wahle yelo here"
        timestamp="40s ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKyTrmu-f9F0cE5QNl0n5PeFA5GlTp4sDKVg&usqp=CAU"
      />
      <Chat
        name="Sara"
        message="Last night was fun 🙃"
        timestamp="1 hour ago"
        profilePic="data:image/jpeg;base64,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"
      />
      <Chat
        name="Cherry"
        message="Yo here u at ? 🤗"
        timestamp="2 days ago"
        profilePic="https://www.profilepic.com/uploads/3/3/6/8/5/_33685/3368520200618124531_m.jpg"
      />
    </div>
  )
}

export default Chats