import $ from 'jquery';
import Location from '../location/location';

const MEETINGS_API = 'https://mcc2-backend.herokuapp.com/';

class Api {

  constructor() {
    this.geocoder = new google.maps.Geocoder();
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

  getLocation(onSuccess) {
    navigator.geolocation.getCurrentPosition((position) => {
      var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      api.geocoder.geocode({location: latlng}, (results: any, status: any) => {
        if (status == google.maps.GeocoderStatus.OK) {
          var result = results[0];
          var city: any;
          for (var component in result['address_components']) {
            for (var i in result['address_components'][component]['types']) {
              if (result['address_components'][component]['types'][i] == "locality") {
                city = result['address_components'][component]['long_name'];
              }
            }
          }
          onSuccess(new Location(position.coords.latitude, position.coords.longitude, city));
        } else {
          console.error('Error getting city from google api');
        }
      });
    }, () => {
      console.error('Error finding location');
    }, {
      timeout: 30000,
      maximumAge: 1,
      enableHighAccuracy: true
    });
  }

}

const api = new Api();

export default api;
