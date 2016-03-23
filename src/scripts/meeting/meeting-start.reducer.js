import ActionTypes from '../common/action-types';
import Meeting from './meeting';

const start = (state = new Meeting(), action) => {
  switch (action.actionType) {
    case ActionTypes.MEETING_STARTED:
      return Object.assign(new Meeting(), state).start();
    default:
      return state;
  }
};

export default start;
