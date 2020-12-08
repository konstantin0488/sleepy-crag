import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const MessageList = () => {
  const messages = useSelector((state) => state.messages);

  return (
    <>
      {
        messages.map((message) => (
          <div key={message.id} className="d-flex justify-content-start mb-4 center_name">
            <div key={message.id}>
              <h6>{message.user}</h6>
            </div>
            <div className="msg_cotainer">
              {message.message}
            </div>
          </div>
        ))
      }
    </>
  );
};

export default MessageList;
