import ActionTypes from '../common/action-types';
import Meeting from './meeting';

const findLocation = (state = new Meeting(), action) => {
  switch (action.actionType) {
    case ActionTypes.GET_LOCATION:
      return Object.assign(new Meeting(), state, {
        isGettingLocation: true,
      });
    default:
      return state;
  }
};

export default findLocation;
