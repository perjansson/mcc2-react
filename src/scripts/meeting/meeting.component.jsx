import React from 'react';
import MeetingInput from './meeting-input.component';
import MeetingOutput from './meeting-output.component';
import CurrencyStore from '../currency/currency.store';

export default class Meeting extends React.Component {

  constructor() {
    super();
    this.CurrencyStore = new CurrencyStore();
    this.state = {
      currencies: [],
      meeting: null
    };
  }

  componentDidMount() {
    var currencies = this.CurrencyStore.getCurrencies();
    this.setState({
      currencies: currencies
    })
  }

  render() {
    return (
      <div>
        <MeetingInput currencies={this.state.currencies} onStart={this.onStartMeeting.bind(this)} onStop={this.onStopMeeting.bind(this)}/>
        <MeetingOutput meeting={this.state.meeting}/>
      </div>
    )
  }

  onStartMeeting(meeting) {
    this.setState({
      currencies: this.state.currencies,
      meeting: meeting
    });
  }

  onStopMeeting(meeting) {
    this.setState({
      currencies: this.state.currencies,
      meeting: meeting
    });
  }

}
