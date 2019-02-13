import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeChannel } from '../actions';

class ChannelList extends Component {
  handleClick = (channel) => {
    this.props.changeChannel(channel);
  }

  render() {
    return (
      <div className="channel-list-element">
        <div className="channels-title">
          <h2>Redux Chat</h2>
        </div>
        <div className="channels">
          {this.props.channels.map((channel) => {
            return (
              <div className="channel" key={channel}>
                <span onClick={event => this.handleClick(channel)} className={channel === this.props.selectedChannel ? 'selected' : ''}>#{channel}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { changeChannel },
    dispatch
  )
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
