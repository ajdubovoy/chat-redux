import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Message from '../components/message';

class MessageList extends Component {
  render() {
    return (
      <div className="message-list">
        {this.props.messages.map(message => <Message message={message} key={message.created_at} />)}
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    messages: state.messages,
  };
}

export default connect(mapStatetoProps)(MessageList);
