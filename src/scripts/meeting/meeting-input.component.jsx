import React from 'react';
import Meeting from './meeting'

export default class MeetingInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      meeting: props.meeting
    }
  }

  render() {
    return (
      <article>
        <section>
          <form role="form" className="meeting-form">
            <div className="row meeting-mandatory-info">
              <div className="form-group col-xs-12 col-sm-4">
                <input id="numberOfAttendees" value={this.state.meeting.numberOfAttendees} onChange={this.onNumberOfAttendeesChange.bind(this)} type="number" min="0" step="1" required className="form-control mcc-input" placeholder="Number of attendees"/>
              </div>
              <div className="form-group col-xs-12 col-sm-4">
                <input id="averageHourlyRate" value={this.state.meeting.averageHourlyRate} onChange={this.onAverageHourlyRateChange.bind(this)} type="number" min="0" step="10" required className="form-control mcc-input" placeholder="Average hourly rate"/>
              </div>
              <div className="form-group col-xs-12 col-sm-4">
                <select id="currency" value={this.state.meeting.currency.key} onChange={this.onCurrencyChange.bind(this)} className="form-control mcc-input">
                  <option value=""></option>
                  {this.props.currencies.map((currency) => (
                    <option key={currency.key} value={currency.key}>{currency.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {this.state.meeting.isStarted()
              ? <div className="row meeting-optional-info-control animated fadeIn">
                  <div className="col-xs-12 text-muted">
                    {!this.state.meeting.location
                      ? <a onClick={this.onGetLocationClick.bind(this)} className="pull-right">
                          {this.state.meeting.isGettingLocation
                            ? <i className="fa fa-spinner fa-spin"></i>
                          : null}
                          Where is this meeting?
                        </a>
                      : <span className="pull-right animated fadeIn">{this.state.meeting.location.city}</span>}
                  </div>
                </div>
              : null}

            {this.state.meeting.isValid()
              ? <div className="row meeting-control">
                  <div className="form-group col-xs-12 text-center animated tada">
                    {this.state.meeting.isNotStarted() || this.state.meeting.isStopped()
                      ? <span id="startButton">
                          <button className="btn btn-link" title="Start" onClick={this.onStartClick.bind(this)}>
                            <i className="fa fa-play"></i>
                          </button>
                        </span>
                      : null}
                    {this.state.meeting.isStarted()
                      ? <span id="stopButton" className="animated fadeIn">
                          <button className="btn btn-link" title="Stop" onClick={this.onStopClick.bind(this)}>
                            <i className="fa fa-stop"></i>
                          </button>
                        </span>
                      : null}
                  </div>
                </div>
              : null}
          </form>
        </section>
      </article>
    )
  }

  onNumberOfAttendeesChange(event) {
    this.props.onNumberOfAttendeesChange(event.target.value);
  }

  onAverageHourlyRateChange(event) {
    this.props.onAverageHourlyRateChange(event.target.value);
  }

  onCurrencyChange(event) {
    var currency = this.props.currencies.find(currency => currency.key === event.target.value);
    this.props.onCurrencyChange(currency);
  }

  onStartClick() {
    this.props.onStart(this.state.meeting);
  }

  onStopClick() {
    this.props.onStop(this.state.meeting);
  }

  onGetLocationClick() {
    this.props.onGetLocation(this.state.meeting);
  }
}
