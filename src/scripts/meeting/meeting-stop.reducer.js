import ActionTypes from '../common/action-types';
import Meeting from './meeting';

const stop = (state = new Meeting(), action) => {
  switch (action.actionType) {
    case ActionTypes.MEETING_STOPPED:
      return Object.assign(new Meeting(), state).stop();
    default:
      return state;
  }
};

export default stop;
