import React from 'react';

export default class MeetingInput extends React.Component {

  render() {
    this.state = {
      meeting: this.props.meeting
    };
    return (
      <article>
        <section>
          <form className="meeting-form"
              role="form">
            <div className="row meeting-mandatory-info">
              <div className="form-group col-xs-12 col-sm-4">
                <input className="form-control mcc-input"
                    id="numberOfAttendees"
                    min="0"
                    onChange={(event) => this.props.onNumberOfAttendeesChange(event.target.value)}
                    placeholder="Number of attendees"
                    required
                    step="1"
                    type="number"
                    value={this.state.meeting.numberOfAttendees}/>
              </div>
              <div className="form-group col-xs-12 col-sm-4">
                <input className="form-control mcc-input"
                    id="averageHourlyRate"
                    min="0"
                    onChange={(event) => this.props.onAverageHourlyRateChange(event.target.value)}
                    placeholder="Average hourly rate"
                    required
                    step="10"
                    type="number"
                    value={this.state.meeting.averageHourlyRate} />
              </div>
              <div className="form-group col-xs-12 col-sm-4">
                <select className="form-control mcc-input"
                    id="currency"
                    onChange={(event) =>
                      this.props.onCurrencyChange(this.props.currencies.find(currency =>
                        currency.key === event.target.value))}
                    value={this.state.meeting.currency.key}>
                  <option value=""></option>
                  {this.props.currencies.map((currency) => (
                    <option key={currency.key}
                        value={currency.key}>{currency.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {this.state.meeting.isStarted()
              ? <div className="row meeting-optional-info-control animated fadeIn">
                  <div className="col-xs-12 text-muted">
                    {!this.state.meeting.location
                      ? <a onClick={() => this.props.onGetLocation(this.state.meeting)} className="pull-right">
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
                          <button className="btn btn-link" title="Start" onClick={() => this.props.onStart(this.state.meeting)}>
                            <i className="fa fa-play"></i>
                          </button>
                        </span>
                      : null}
                    {this.state.meeting.isStarted()
                      ? <span id="stopButton" className="animated fadeIn">
                          <button className="btn btn-link" title="Stop" onClick={() => this.props.onStop(this.state.meeting)}>
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
}
