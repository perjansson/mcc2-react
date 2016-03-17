import ActionTypes from './action-types';
import AppDispatcher from './dispatcher';

const MeetingServerActionsCreator = {
  anyGivenServerAction(id) {
    AppDispatcher.handleServerAction({
      actionType: ActionTypes.ANY_GIVEN_ACTION,
      id: id
    })
  }
}

export default MeetingServerActionsCreator;
