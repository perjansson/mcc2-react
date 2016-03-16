import React from 'react';
import MeetingInput from './meeting-input';
import MeetingOutput from './meeting-output';

export default class Meeting extends React.Component {
  render() {
    return (
      <div>
        <MeetingInput/>
        <MeetingOutput/>
      </div>
    )
  }
}
