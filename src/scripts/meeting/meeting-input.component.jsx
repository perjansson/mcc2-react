import React from 'react';

export default class MeetingInput extends React.Component {

  constructor() {
    super();
    this.meeting = {
      numberOfAttendees: null,
      averageHourlyRate: null,
      currency: null
    };
  }

  render() {
    return (
      <article>
        <section>
          <form role="form" className="meeting-form">
            <div className="row meeting-mandatory-info">
              <div className="form-group col-xs-12 col-sm-4">
                <input id="numberOfAttendees"
                  value={this.meeting.numberOfAttendees}
                  onChange={this.onNumberOfAttendeesChange.bind(this)}
                  type="number"
                  min="0"
                  step="1"
                  required
                  className="form-control mcc-input"
                  placeholder="Number of attendees"/>
              </div>
              <div className="form-group col-xs-12 col-sm-4">
                <input id="averageHourlyRate"
                  value={this.meeting.averageHourlyRate}
                  onChange={this.onAverageHourlyRateChange.bind(this)}
                  type="number"
                  min="0"
                  step="10"
                  required
                  className="form-control mcc-input"
                  placeholder="Average hourly rate"/>
              </div>
              <div className="form-group col-xs-12 col-sm-4">
                <select id="currency"
                  defaultValue={this.meeting.currency}
                  onChange={this.onCurrencyChange.bind(this)}
                  className="form-control mcc-input">
                  {
                    this.props.currencies.map(function(currency) {
                      return <option key={currency.key} value={currency.name}>{currency.name}</option>;
                    })
                  }
                </select>
              </div>
            </div>

            { this.isValidMeeting() ?
              <div className="row meeting-control">
                <div className="form-group col-xs-12 text-center animated tada">
                  <span id="startButton">
                    <button className="btn btn-link" title="Start" onClick={this.onStartClick.bind(this)}>
                      <i className="fa fa-play"></i>
                    </button>
                  </span>
                  <span id="stopButton" className="animated fadeIn">
                    <button className="btn btn-link" title="Stop" onClick={this.onStopClick.bind(this)}>
                      <i className="fa fa-stop"></i>
                    </button>
                  </span>
                </div>
              </div> : null
            }
          </form>
        </section>
      </article>
    )
  }

  isValidMeeting() {
    return this.meeting.numberOfAttendees && this.meeting.averageHourlyRate && this.meeting.currency;
  }

  onNumberOfAttendeesChange(event) {
    this.meeting.numberOfAttendees = event.target.value;
    this.setState({meeting: this.meeting});
  }

  onAverageHourlyRateChange(event) {
    this.meeting.averageHourlyRate = event.target.value;
    this.setState({meeting: this.meeting});
  }

  onCurrencyChange(event) {
    this.meeting.currency = event.target.value;
    this.setState({meeting: this.meeting});
  }

  onStartClick() {
    console.log('onStartClick');
  }

  onStopClick() {
    console.log('onStopClick');
  }
}
