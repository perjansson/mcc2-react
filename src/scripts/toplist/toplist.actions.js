
import fetch from 'isomorphic-fetch';

export const REQUEST_MEETINGS = 'REQUEST_MEETINGS';
function requestMeetings() {
  return {
    type: REQUEST_MEETINGS,
  };
}

export const RECEIVE_MEETINGS = 'RECEIVE_MEETINGS';
function receiveMeetings(json) {
  return {
    type: RECEIVE_MEETINGS,
    meetings: json,
    receivedAt: Date.now(),
  };
}

export function fetchMeetings() {
  return (dispatch) => {
    dispatch(requestMeetings);

    return fetch('https://mcc2-backend.herokuapp.com/meetings')
      .then(response => response.json())
      .then(json => dispatch(receiveMeetings(json))
    );
  };
}
