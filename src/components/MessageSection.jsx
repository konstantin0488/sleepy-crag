import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import UserNameContext from './UserNameContext';
import SendMessageForm from './SendMessageForm';
import MessageList from './MessageList';

const MessageSection = () => {
  const userName = useContext(UserNameContext);

  const channelName = useSelector((state) => state.channels);
  const channelCurrentId = useSelector((state) => state.currentChannelId.currentId);

  return (
    <div className="card">
      <div className="card-header msg_head">
        <div className="d-flex bd-highlight justify-content-between">
          <div>
            <h6>
              Name: &nbsp;
              {userName}
            </h6>
          </div>
          <div>
            <h6>
              Room: &nbsp;
              {channelName[channelCurrentId].name}
            </h6>
          </div>
        </div>
      </div>
      <div className="card-body msg_card_body">
        <MessageList />
      </div>
      <div className="card-footer">
        <SendMessageForm />
      </div>
    </div>
  );
};

export default MessageSection;
