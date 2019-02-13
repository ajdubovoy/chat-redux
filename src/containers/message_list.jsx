import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Message from '../components/message';
import MessageForm from './message_form';
import { loadMessages } from '../actions';

class MessageList extends Component {
  componentWillMount() {
    this.props.loadMessages(this.props.selectedChannel);
  }

  render() {
    return (
      <div className="message-list-element">
        <div className="selected-channel">
          <h2>Channel #{this.props.selectedChannel}</h2>
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

function mapDispatchtoProps(dispatch) {
  return bindActionCreators(
    { loadMessages },
    dispatch
  );
}

export default connect(mapStatetoProps, mapDispatchtoProps)(MessageList);
