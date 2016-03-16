import AGStopwatch from 'agstopwatch';
import MeetingStatus from './meeting-status';
import {Guid} from '../common/guid';

export default class Meeting {

  constructor() {
    this.stopWatch = new AGStopwatch();
    this.id = null;
    this.status = null;
    this.numberOfAttendees = null;
    this.averageHourlyRate = null;
    this.currency = null;
    this.name = null;
    this.location = null;
    this.isGoodMeeting = null;
  }

  start() {
    this.status = MeetingStatus.Started;
    this.id = Guid.newGuid();
    this.stopWatch.start();
  }

  stop() {
    this.status = MeetingStatus.Stopped;
    this.stopWatch.stop();
  }

  isValid() {
    return this.numberOfAttendees && this.averageHourlyRate && this.currency;
  }

  isNotStarted() {
    return this.status === null;
  }

  isStarted() {
    return this.status === MeetingStatus.Started;
  }

  isStopped() {
    return this.status === MeetingStatus.Stopped;
  }

  getCost() {
    return Math.round(this.getExactMeetingCost()).toFixed(0);
  }

  getExactMeetingCost() {
    return this.getMeetingCostPerSecond() * this.getElapsedTimeInSeconds();
  }

  getMeetingCostPerSecond() {
    return this.numberOfAttendees * (this.averageHourlyRate / 3600);
  }

  getElapsedTimeInSeconds() {
    return this.stopWatch.elapsed / 1000;
  }

}
