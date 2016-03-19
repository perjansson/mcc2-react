export default function(oldMeeting, action) {
  var newMeeting = oldMeeting.copy();
  newMeeting.isGettingLocation = true;
  return newMeeting;
}
