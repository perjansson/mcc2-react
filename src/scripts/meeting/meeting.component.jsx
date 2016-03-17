import React from 'react';
import MeetingInput from './meeting-input.component';
import MeetingOutput from './meeting-output.component';
import CurrencyStore from '../currency/currency.store';
import MeetingStore from './meeting.store';

export default class Meeting extends React.Component {

  constructor() {
    super();
    this.timer = null;
    this.state = {
      currencies: CurrencyStore.getCurrencies(),
      meeting: MeetingStore.getMeeting()
    };
    if (this.state.meeting.isStarted()) {
      this.startPollingMeetingCost()
    }
  }

  render() {
    return (
      <div>
        <MeetingInput currencies={this.state.currencies} meeting={this.state.meeting} onStart={this.onStartMeeting.bind(this)} onStop={this.onStopMeeting.bind(this)}/>
        <MeetingOutput meeting={this.state.meeting}/>
      </div>
    )
  }

  onStartMeeting(meeting) {
    meeting.start();
    this.updateState(meeting);
    this.startPollingMeetingCost();
  }

  onStopMeeting(meeting) {
    this.state.meeting.stop();
    this.updateState(meeting)
    this.stopPollingMeetingCost();
  }

  updateState(meeting) {
    this.setState({
      currencies: this.state.currencies,
      meeting: meeting
    });
  }

  componentWillUnmount() {
    this.stopPollingMeetingCost();
  }

  startPollingMeetingCost() {
    this.timer = setInterval(() => {
      this.setState({
        currencies: this.state.currencies,
        meeting: this.state.meeting
      });
    }, 50);
  }

  stopPollingMeetingCost() {
    clearInterval(this.timer);
  }

}
