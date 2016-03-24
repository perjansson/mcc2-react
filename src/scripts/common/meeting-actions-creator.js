import ActionTypes from './action-types';
import AppDispatcher from './dispatcher';

const MeetingActionsCreator = {
  updateNumberOfAttendees(id, numberOfAttendees) {
    AppDispatcher.handleViewAction({
      actionType: ActionTypes.UPDATE_NUMBER_OF_ATTENDEES,
      id,
      numberOfAttendees,
    });
  },

  updateAverageHourlyRate(id, averageHourlyRate) {
    AppDispatcher.handleViewAction({
      actionType: ActionTypes.UPDATE_AVERAGE_HOURLY_RATE,
      id,
      averageHourlyRate,
    });
  },

  updateCurrency(id, currency) {
    AppDispatcher.handleViewAction({
      actionType: ActionTypes.UPDATE_CURRENCY,
      id,
      currency,
    });
  },

  startMeeting(id) {
    AppDispatcher.handleViewAction({
      actionType: ActionTypes.MEETING_STARTED,
      id,
    });
  },

  stopMeeting(id) {
    AppDispatcher.handleViewAction({
      actionType: ActionTypes.MEETING_STOPPED,
      id,
    });
  },

  getLocation(id) {
    AppDispatcher.handleViewAction({
      actionType: ActionTypes.GET_LOCATION,
      id,
    });
  },

  foundLocation(id, location) {
    AppDispatcher.handleServerAction({
      actionType: ActionTypes.FOUND_LOCATION,
      id,
      location,
    });
  },
};

export default MeetingActionsCreator;
