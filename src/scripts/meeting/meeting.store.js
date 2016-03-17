import {
  EventEmitter
} from 'events';
import AppDispatcher from '../common/dispatcher';
import ActionTypes from '../common/action-types';
import Meeting from './meeting'

const CHANGE_EVENT = 'change';

class MeetingStore extends EventEmitter {

  constructor() {
    super();
    this.meeting = new Meeting({
      key: 'BTC',
      name: 'Bitcoin'
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
  let id;
  switch (payload.action.actionType) {
    case ActionTypes.MEETING_STARTED:
      id = payload.action.id;
      meetingStore.meeting.start();
      // Save to API
      meetingStore.emitChange();
      break;
    case ActionTypes.MEETING_STOPPED:
      id = payload.action.id;
      meetingStore.meeting.stop();
      // Save to API
      meetingStore.emitChange();
      break;

    default:
      // Do nothing
  }

  return true;
});

export default meetingStore;
