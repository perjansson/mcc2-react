import ActionTypes from './action-types';
import AppDispatcher from './dispatcher';

const MeetingActionsCreator = {
  startMeeting(id) {
    AppDispatcher.handleViewAction({
      actionType: ActionTypes.MEETING_STARTED,
      id: id
    })
  },

  stopMeeting(id, rate) {
    AppDispatcher.handleViewAction({
      actionType: ActionTypes.MEETING_STOPPED,
      id: id
    })
  }
}

export default MeetingActionsCreator;
