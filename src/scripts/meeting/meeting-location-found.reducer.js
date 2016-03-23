import ActionTypes from '../common/action-types';
import Meeting from './meeting';

const locationFound = (state = new Meeting(), action) => {
  switch (action.actionType) {
    case ActionTypes.FOUND_LOCATION:
      return Object.assign(new Meeting(), state, {
        isGettingLocation: false,
        location: action.location,
      });
    default:
      return state;
  }
};

export default locationFound;
