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
      <p className="sentText pr-10">{trimmedName}</p>
      <div className="messageBox bg-blue">
        <p className="messageText white-text">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className="message-container justify-start">
      <div className="messageBox bg-light">
        <p className="messageText dark-text">{ReactEmoji.emojify(text)}</p>
      </div>
      <p className="sent-text pl-10">{user}</p>
    </div>
  );
};

export default Message;
