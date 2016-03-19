export default function(oldMeeting, action) {
  var newMeeting = oldMeeting.copy();
  newMeeting.stop();
  return newMeeting;
}
