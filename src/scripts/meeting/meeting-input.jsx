import React from 'react';

export default class MeetingInput extends React.Component {
  render() {
    console.log('this.props', this.props.currencies);
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
                <select id="currency"
                  required
                  className="form-control mcc-input"
                  placeholder="Currency">
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
