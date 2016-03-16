import Meeting from './meeting'

class MeetingStore {

  constructor() {
    console.log('MeetingStore.constructor');
    this.meeting = new Meeting({key: 'BTC', name: 'Bitcoin'});
  }

  getMeeting() {
    return this.meeting;
  }

}

export default new MeetingStore();
