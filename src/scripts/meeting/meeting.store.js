import {EventEmitter} from 'events';
import AppDispatcher from '../common/dispatcher';
import MeetingApi from './meeting-api'
import ActionTypes from '../common/action-types';
import Meeting from './meeting'
import Location from '../location/location';

const CHANGE_EVENT = 'change';

class MeetingStore extends EventEmitter {

  constructor() {
    super();
    this.meeting = new Meeting({
      key: 'BTC',
      name: 'Bitcoin'
    });
    this.geocoder = new google.maps.Geocoder();
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
      MeetingApi.saveMeeting(meetingStore.meeting);
      meetingStore.emitChange();
      break;

    case ActionTypes.GET_LOCATION:
      id = payload.action.id;
      meetingStore.meeting.isGettingLocation = true;
      meetingStore.emitChange();
      // TODO: Move to API...
      navigator.geolocation.getCurrentPosition((position) => {
        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        meetingStore.geocoder.geocode({location: latlng}, (results: any, status: any) => {
          if (status == google.maps.GeocoderStatus.OK) {
            var result = results[0];
            var city: any;
            for (var component in result['address_components']) {
              for (var i in result['address_components'][component]['types']) {
                if (result['address_components'][component]['types'][i] == "locality") {
                  city = result['address_components'][component]['long_name'];
                }
              }
            }
            meetingStore.meeting.location = new Location(position.coords.latitude, position.coords.longitude, city);
            meetingStore.meeting.isGettingLocation = false;
            meetingStore.emitChange();
          } else {
            console.error('Error getting city from google api');
          }
        });
      }, () => {
        console.error('Error finding location');
      }, {
        timeout: 30000,
        maximumAge: 1,
        enableHighAccuracy: true
      });
      break;

    default:
      // Do nothing
  }

  return true;
});

export default meetingStore;
