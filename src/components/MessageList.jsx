import React, { useEffect, useRef } from 'react';
import cookies from 'js-cookie';
import { useSelector } from 'react-redux';

const MessageList = () => {
  const messages = useSelector((state) => state.messages);
  const channelId = useSelector((state) => state.currentChannelId.currentId);
  const currentUser = cookies.get('userName');

  const divRef = useRef();
  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' }, [messages]);
    }
  });

  return (
    <>
      {
        messages.filter((message) => message.channelId === channelId)
          .map((message) => (
            currentUser === message.user ? (
              <div ref={divRef} key={message.id} className="d-flex justify-content-start mb-4">
                <div key={message.id}>
                  <h6 className="user">{message.user}</h6>
                  <span className="date">{message.date}</span>
                </div>
                <div className="msg_cotainer">
                  {message.message}
                </div>
              </div>
            ) : (
              <div ref={divRef} key={message.id} className="d-flex justify-content-end mb-4">
                <div className="msg_cotainer">
                  {message.message}
                </div>
                <div key={message.id}>
                  <h6 className="user">{message.user}</h6>
                  <span className="date">{message.date}</span>
                </div>
              </div>
            )
          ))
      }
    </>
  );
};

export default MessageList;
