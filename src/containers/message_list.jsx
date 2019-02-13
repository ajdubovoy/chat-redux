import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Message from '../components/message';
import MessageForm from './message_form';

class MessageList extends Component {
  render() {
    return (
      <div className="message-list">
        <div className="selected-channel">
          Channel #{this.props.selectedChannel}
        </div>
        <div className="messages">
          {this.props.messages.map(message => <Message message={message} key={message.created_at} />)}
        </div>
        <div className="message-form">
          <MessageForm />
        </div>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStatetoProps)(MessageList);
