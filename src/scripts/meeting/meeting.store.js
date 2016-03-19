import {EventEmitter} from 'events';
import AppDispatcher from '../common/dispatcher';
import Api from '../common/api';
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
    case ActionTypes.UPDATE_NUMBER_OF_ATTENDEES:
      id = payload.action.id;
      meetingStore.meeting.numberOfAttendees = payload.action.numberOfAttendees;
      meetingStore.emitChange();
      break;

    case ActionTypes.UPDATE_AVERAGE_HOURLY_RATE:
      id = payload.action.id;
      meetingStore.meeting.averageHourlyRate = payload.action.averageHourlyRate;
      meetingStore.emitChange();
      break;

    case ActionTypes.UPDATE_CURRENCY:
      id = payload.action.id;
      meetingStore.meeting.currency = payload.action.currency;
      meetingStore.emitChange();
      break;

    case ActionTypes.MEETING_STARTED:
      id = payload.action.id;
      meetingStore.meeting.start();
      meetingStore.emitChange();
      break;

    case ActionTypes.MEETING_STOPPED:
      id = payload.action.id;
      meetingStore.meeting.stop();
      Api.saveMeeting(meetingStore.meeting);
      meetingStore.emitChange();
      break;

    case ActionTypes.GET_LOCATION:
      id = payload.action.id;
      meetingStore.meeting.isGettingLocation = true;
      meetingStore.emitChange();
      Api.getLocation((location) => {
        meetingStore.meeting.location = location;
        meetingStore.meeting.isGettingLocation = false;
        meetingStore.emitChange();
      });
      break;

    default:
      // Do nothing
  }

  return true;
});

export default meetingStore;
