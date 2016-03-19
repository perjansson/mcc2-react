export default function(oldMeeting, action) {
  var newMeeting = oldMeeting.copy();
  newMeeting.start();
  return newMeeting;
}
