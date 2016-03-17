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
    this.state = {
      currencies: CurrencyStore.getCurrencies(),
      meeting: MeetingStore.getMeeting()
    };

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
        <MeetingInput currencies={this.state.currencies} meeting={this.state.meeting} onStart={this.onStartMeeting.bind(this)} onStop={this.onStopMeeting.bind(this)}/>
        <MeetingOutput meeting={this.state.meeting}/>
      </div>
    )
  }

  onChange() {
    this.updateState(MeetingStore.getMeeting());
  }

  onStartMeeting(meeting) {
    MeetingActionsCreator.startMeeting(meeting.id);
    this.startPollingMeetingCost();
  }

  onStopMeeting(meeting) {
    MeetingActionsCreator.stopMeeting(meeting.id);
    this.stopPollingMeetingCost();
  }

  updateState(meeting) {
    this.setState({
      currencies: this.state.currencies,
      meeting: meeting
    });
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
