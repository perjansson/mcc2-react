import ActionTypes from './action-types';
import AppDispatcher from './dispatcher';

const MeetingActionsCreator = {
  updateNumberOfAttendees(id, numberOfAttendees) {
    AppDispatcher.handleViewAction({
      actionType: ActionTypes.UPDATE_NUMBER_OF_ATTENDEES,
      id: id,
      numberOfAttendees: numberOfAttendees
    })
  },

  updateAverageHourlyRate(id, averageHourlyRate) {
    AppDispatcher.handleViewAction({
      actionType: ActionTypes.UPDATE_AVERAGE_HOURLY_RATE,
      id: id,
      averageHourlyRate: averageHourlyRate
    })
  },

  updateCurrency(id, currency) {
    AppDispatcher.handleViewAction({
      actionType: ActionTypes.UPDATE_CURRENCY,
      id: id,
      currency: currency
    })
  },

  startMeeting(id) {
    AppDispatcher.handleViewAction({
      actionType: ActionTypes.MEETING_STARTED,
      id: id
    })
  },

  stopMeeting(id) {
    AppDispatcher.handleViewAction({
      actionType: ActionTypes.MEETING_STOPPED,
      id: id
    })
  },

  getLocation(id) {
    AppDispatcher.handleViewAction({
      actionType: ActionTypes.GET_LOCATION,
      id: id
    })
  },

  getMeetings() {
    AppDispatcher.handleViewAction({
      actionType: ActionTypes.GET_MEETINGS
    })
  }
}

export default MeetingActionsCreator;
