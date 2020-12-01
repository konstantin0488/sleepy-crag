import React from 'react';
import ChannelList from './ChannelList';

const App = () => (
  <div className="row justify-content-center h-100">
    <div className="col-md-3 chat">
      <div className="card mb-sm-3 mb-md-0 contacts_card">
        <ChannelList />
      </div>
    </div>
    <div className="col-md-9 chat">
      <div className="card">
        <div className="card-body msg_card_body">
          <div className="d-flex justify-content-start mb-4">
            MESSAGE
          </div>
        </div>
        <div className="card-footer">
          <div className="input-group">
            <textarea name="" className="form-control type_msg" placeholder="Type your message..." />
            <div className="input-group-append">
              <span className="input-group-text send_btn">
                <button type="submit" className="btn-sm">SEND</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
