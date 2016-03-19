import ActionTypes from '../common/action-types';

export default function(oldMeeting, action) {
  switch (action.actionType) {
    case ActionTypes.UPDATE_NUMBER_OF_ATTENDEES:
      var newMeeting = oldMeeting.copy();
      newMeeting.numberOfAttendees = action.numberOfAttendees;
      return newMeeting;
    case ActionTypes.UPDATE_AVERAGE_HOURLY_RATE:
      var newMeeting = oldMeeting.copy();
      newMeeting.averageHourlyRate = action.averageHourlyRate;
      return newMeeting;
    case ActionTypes.UPDATE_CURRENCY:
      var newMeeting = oldMeeting.copy();
      newMeeting.currency = action.currency;
      return newMeeting;
  }
  return oldMeeting;
}
