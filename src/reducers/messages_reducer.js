import { LOAD_MESSAGES, ADD_MESSAGE } from '../actions';

const messagesReducer = (state = null, action) => {
  switch (action.type) {
    case LOAD_MESSAGES:
      return action.payload;
    case ADD_MESSAGE:
      return (
        [...state].concat(action.payload)
      );
    default:
      return state;
  }
};

export default messagesReducer;
