import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    addMessage(this.props.selectedChannel, this.props.currentUser, this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="message-form">
        <form className="message-form-form" onSubmit={this.handleSubmit}>
          <input className="form-control content-input" type="text" name="message" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" name="submit" className="submit-button btn btn-primary" />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { addMessage },
    dispatch
  );
}

function mapStatetoProps(state) {
  return {
    currentUser: state.currentUser,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStatetoProps)(MessageForm);
