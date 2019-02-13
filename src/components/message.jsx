import React from 'react';

const Message = ({ message }) => {
  return(
    <div className="message">
      <div className="metadata">
        <span className="author">{message.author}</span> — <span className="created_at">{message.created_at}</span>
      </div>
      <div className="content">{message.content}</div>
    </div>
  );
};

export default Message;
