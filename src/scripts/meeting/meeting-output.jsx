import React from 'react';

export default class MeetingOutput extends React.Component {
  render() {
    return (
      <div className="row meeting-cost animated bounceInUp">
        <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
          <div className="alert alert-danger alert-meeting-cost" role="alert">
            Meeting cost is <strong>XXX BTC</strong>
          </div>
        </div>
      </div>
    )
  }
}