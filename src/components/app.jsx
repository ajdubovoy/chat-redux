import React from 'react';
import MessageList from '../containers/message_list';
import ChannelList from '../containers/channel_list';

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2 channel-list">
          <ChannelList />
        </div>
        <div className="col-sm-10 message-list">
          <MessageList />
        </div>
      </div>
    </div>
  );
};

export default App;
