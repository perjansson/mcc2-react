import { combineReducers } from 'redux';
import { REQUEST_MEETINGS, RECEIVE_MEETINGS } from './toplist.actions';

const meetings = (state = [], action) => {
  switch (action.type) {
    case REQUEST_MEETINGS:
      // TODO: Set flag, until then return current state
      return state;
    case RECEIVE_MEETINGS:
      return action.meetings;
    default:
      return state;
  }
};

const rootReducer = combineReducers({ meetings });

export default rootReducer;
