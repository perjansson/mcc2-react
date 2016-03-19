export default function(oldMeeting, location) {
  var newMeeting = oldMeeting.copy();
  newMeeting.location = location;
  newMeeting.isGettingLocation = false;
  return newMeeting;
}
