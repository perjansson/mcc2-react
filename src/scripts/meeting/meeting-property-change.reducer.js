import ActionTypes from '../common/action-types';
import Meeting from './meeting';

const propertyChange = (state = new Meeting(), action) => {
  switch (action.actionType) {
    case ActionTypes.UPDATE_NUMBER_OF_ATTENDEES:
      return Object.assign(new Meeting(), state, {
        numberOfAttendees: action.numberOfAttendees,
      });
    case ActionTypes.UPDATE_AVERAGE_HOURLY_RATE:
      return Object.assign(new Meeting(), state, {
        averageHourlyRate: action.averageHourlyRate,
      });
    case ActionTypes.UPDATE_CURRENCY:
      return Object.assign(new Meeting(), state, {
        currency: action.currency,
      });
    default:
      return state;
  }
};

export default propertyChange;
