import React from 'react';
import ReactEmoji from 'react-emoji';

import './message.css';

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="message-container justify-end">
      <div className="messageBox bg-blue">
        <p className="messageText white-text">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className="message-container justify-start">
      <div className="messageBox">
        <p className="sent-text">{user}</p>
        <p className="messageText dark-text">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  );
};

export default Message;
