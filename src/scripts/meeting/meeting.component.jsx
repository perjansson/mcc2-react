import React from 'react';
import MeetingInput from './meeting-input.component';
import MeetingOutput from './meeting-output.component';
import CurrencyStore from '../currency/currency.store';
import MeetingStore from './meeting.store';
import MeetingActionsCreator from '../common/meeting-actions-creator';

export default class Meeting extends React.Component {

  constructor(props) {
    super(props);
    this.timer = null;
    this.state = this.getMeetingState();

    this._onChange = this.onChange.bind(this);

    if (this.state.meeting.isStarted()) {
      this.startPollingMeetingCost()
    }
  }

  componentWillMount() {
    MeetingStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    MeetingStore.removeChangeListener(this._onChange);
    this.stopPollingMeetingCost();
  }

  render() {
    return (
      <div>
        <MeetingInput meeting={this.state.meeting}
          currencies={this.state.currencies}
          onStart={this.onStartMeeting.bind(this)}
          onStop={this.onStopMeeting.bind(this)}
          onGetLocation={this.onGetLocation.bind(this)}/>
        <MeetingOutput meeting={this.state.meeting}/>
      </div>
    )
  }

  onStartMeeting(meeting) {
    MeetingActionsCreator.startMeeting(meeting.id);
    this.startPollingMeetingCost();
  }

  onStopMeeting(meeting) {
    MeetingActionsCreator.stopMeeting(meeting.id);
    this.stopPollingMeetingCost();
  }

  onGetLocation(meeting) {
    MeetingActionsCreator.getLocation(meeting.id);
  }

  onChange() {
    this.setState(this.getMeetingState());
  }

  getMeetingState() {
    return {currencies: CurrencyStore.getCurrencies(), meeting: MeetingStore.getMeeting()};
  }

  startPollingMeetingCost() {
    this.timer = setInterval(() => {
      this._onChange()
    }, 50);
  }

  stopPollingMeetingCost() {
    clearInterval(this.timer);
  }

}
