import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class MessageForm extends Component {
  render() {
    return (
      <div className="message-form">
        <form>
          <input type="text" name="message" />
          <input type="submit" name="submit" className="submit-button" />
        </form>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStatetoProps)(MessageForm);
