import React from 'react';
import TopListStore from './toplist.store';
import MeetingActionsCreator from '../common/meeting-actions-creator';

export default class TopList extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.getTopListState();

    this._onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    TopListStore.addChangeListener(this._onChange);
    MeetingActionsCreator.getMeetings();
  }

  componentWillUnmount() {
    TopListStore.removeChangeListener(this._onChange);
  }

  render() {
    return (
      <article>
        <section>
          <div className="row top-list">
            {!this.state.meetings
              ? <div className="col-xs-12 loader animated fadeIn">
                  <i className="fa fa-spinner fa-spin"></i>
                  Getting meetings
                </div>
              : null}

            {this.state.meetings && !this.state.meetings.length
              ? <div className="col-xs-12 loader animated fadeIn">
                  <i className="fa fa-frown-o"></i>
                  No meetings found
                </div>
              : null}

            {this.state.meetings && this.state.meetings.length
              ? <div className="col-xs-12">
                  <table className="table table-striped table-hover">
                    <tr>
                      <th width="10%"></th>
                      <th width="30%">Number of attendees</th>
                      <th width="30%">Average hourly rate</th>
                      <th width="30%">Cost</th>
                    </tr>
                    {this.state.meetings.map((meeting, i) => (
                      <tr>
                        <td>{i+1}</td>
                        <td>{meeting.numberOfAttendees}</td>
                        <td>{meeting.averageHourlyRate}</td>
                        <td>{meeting.cost} {meeting.currency.name}</td>
                      </tr>
                    ))}
                  </table>
                </div>
              : null}
          </div>
        </section>
      </article>
    )
  }

  getTopListState() {
    return {meetings: TopListStore.getMeetings()};
  }

  onChange() {
    this.setState(this.getTopListState());
  }

}
