import React from 'react';
import ChannelList from './ChannelList';
import MessageSection from './MessageSection';

const App = () => (
  <div className="row justify-content-center h-100">
    <div className="col-md-3 chat">
      <div className="card mb-sm-3 mb-md-0 contacts_card">
        <ChannelList />
      </div>
    </div>
    <div className="col-md-9 chat">
      <MessageSection />
    </div>
  </div>
);

export default App;
