import { EventEmitter } from 'events';
import AppDispatcher from '../common/dispatcher';
import Api from '../common/api';
import ActionTypes from '../common/action-types';
import MeetingActionsCreator from '../common/meeting-actions-creator';
import Meeting from './meeting';
import meetingPropertyChangeReducer from './meeting-property-change.reducer';
import meetingStartReducer from './meeting-start.reducer';
import meetingStopReducer from './meeting-stop.reducer';
import meetingLocationWillFindReducer from './meeting-location-will-find.reducer';
import meetingLocationFoundReducer from './meeting-location-found.reducer';

const CHANGE_EVENT = 'change';

class MeetingStore extends EventEmitter {

  constructor() {
    super();
    this.meeting = new Meeting({
      key: 'BTC',
      name: 'Bitcoin',
    });
  }

  getMeeting(id) {
    return this.meeting;
  }

  addChangeListener(listener) {
    this.addListener(CHANGE_EVENT, listener);
  }

  removeChangeListener(listener) {
    this.removeListener(CHANGE_EVENT, listener);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

}

const meetingStore = new MeetingStore();

AppDispatcher.register((payload) => {
  switch (payload.action.actionType) {
    case ActionTypes.UPDATE_NUMBER_OF_ATTENDEES:
    case ActionTypes.UPDATE_AVERAGE_HOURLY_RATE:
    case ActionTypes.UPDATE_CURRENCY:
      meetingStore.meeting = meetingPropertyChangeReducer(meetingStore.meeting, payload.action);
      break;

    case ActionTypes.MEETING_STARTED:
      meetingStore.meeting = meetingStartReducer(meetingStore.meeting, payload.action);
      break;

    case ActionTypes.MEETING_STOPPED:
      meetingStore.meeting = meetingStopReducer(meetingStore.meeting, payload.action);
      Api.saveMeeting(meetingStore.meeting);
      break;

    case ActionTypes.GET_LOCATION:
      meetingStore.meeting = meetingLocationWillFindReducer(meetingStore.meeting, payload.action);
      Api.getLocation()
        .then((location) => {
          MeetingActionsCreator.foundLocation(meetingStore.meeting.id, location);
        });
      break;

    case ActionTypes.FOUND_LOCATION:
      meetingStore.meeting = meetingLocationFoundReducer(meetingStore.meeting, payload.action);
      break;

    default:
      // Do nothing
  }

  meetingStore.emitChange();
  return true;
});

export default meetingStore;
