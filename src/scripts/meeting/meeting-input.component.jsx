import React from 'react';
import Select from 'react-select';

export default class MeetingInput extends React.Component {
  render() {
    return (
      <article>
        <section>
          <form role="form" className="meeting-form">
            <div className="row meeting-mandatory-info">
              <div className="form-group col-xs-12 col-sm-4">
                <input id="numberOfAttendees"
                  type="number"
                  min="0"
                  step="1"
                  required
                  className="form-control mcc-input"
                  placeholder="Number of attendees"/>
              </div>
              <div className="form-group col-xs-12 col-sm-4">
                <input id="averageHourlyRate"
                  type="number"
                  min="0"
                  step="10"
                  required
                  className="form-control mcc-input"
                  placeholder="Average hourly rate"/>
              </div>
              <div className="form-group col-xs-12 col-sm-4">
                <select className="form-control mcc-input">
                  {
                    this.props.currencies.map(function(currency) {
                      return <option key={currency.key} value={currency.name}>{currency.name}</option>;
                    })
                  }
                </select>
              </div>
            </div>

            <div className="row meeting-control">
              <div className="form-group col-xs-12 text-center animated tada">
                <span id="startButton">
                  <button className="btn btn-link" title="Start">
                    <i className="fa fa-play"></i>
                  </button>
                </span>
                <span id="stopButton" className="animated fadeIn">
                  <button className="btn btn-link" title="Stop">
                    <i className="fa fa-stop"></i>
                  </button>
                </span>
              </div>
            </div>
          </form>
        </section>
      </article>
    )
  }
}
