import ActionTypes from './action-types';
import AppDispatcher from './dispatcher';

const MeetingActionsCreator = {
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
  }
}

export default MeetingActionsCreator;
