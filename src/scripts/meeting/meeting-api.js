import $ from 'jquery';

const MEETINGS_API = 'https://mcc2-backend.herokuapp.com/';

class MeetingApi {

  constructor() {
  }

  saveMeeting(meeting) {
    $.ajax({
      url: MEETINGS_API + "meetings",
      dataType: 'json',
      type: 'POST',
      data: JSON.stringify(meeting),
      success: function(data) {}.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  getMeetings(onSuccess) {
    $.ajax({
      url: MEETINGS_API + "meetings",
      dataType: 'json',
      type: 'GET',
      success: onSuccess,
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

}

const meetingApi = new MeetingApi();

export default meetingApi;
