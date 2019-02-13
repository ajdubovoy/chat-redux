import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ChannelList extends Component {
  render() {
    return (
      <div className="channel-list">
        {this.props.channels.map((channel) => {
          return (
            <div className="channel" key={channel}>
              <span className={channel === this.props.selectedChannel ? 'selected' : ''}>{channel}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps)(ChannelList);
