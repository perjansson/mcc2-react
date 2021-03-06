import AGStopwatch from 'agstopwatch';
import MeetingStatus from './meeting-status';
import { Guid } from '../common/guid';
import _ from 'underscore';

export default class Meeting {

  constructor(currency) {
    this.stopWatch = new AGStopwatch();
    this.id = null;
    this.version = 1;
    this.status = null;
    this.numberOfAttendees = null;
    this.averageHourlyRate = null;
    this.currency = currency;
    this.name = null;
    this.location = null;
    this.isGoodMeeting = null;
    this.cost = null;
  }

  start() {
    this.status = MeetingStatus.Started;
    this.id = Guid.newGuid();
    this.stopWatch.start();
    return this;
  }

  stop() {
    this.status = MeetingStatus.Stopped;
    this.stopWatch.stop();
    this.cost = this.getCost();
    return this;
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
    return parseFloat(Math.round(this.getExactMeetingCost()).toFixed(0));
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

  copy() {
    return _.extend(new Meeting(), this);
  }

}
