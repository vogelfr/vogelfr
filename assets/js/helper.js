function toDegreesMinutesAndSeconds(coordinate) {
  var absolute = Math.abs(coordinate);
  var degrees = Math.floor(absolute);
  var minutesNotTruncated = (absolute - degrees) * 60;
  var minutes = Math.floor(minutesNotTruncated);
  var seconds = Math.floor((minutesNotTruncated - minutes) * 60);

  return degrees + "°" + minutes + "'" + seconds + '"';
}

function convertDMS(lat, latRef, lng, lngRef) {
  
  var latitude = toDegreesMinutesAndSeconds(lat);

  var longitude = toDegreesMinutesAndSeconds(lng);

  console.log("Latitude orig:\t" + lat);
  console.log("Longitute orig:\t" + lng);
  console.log("Latitude card:\t" + latRef);
  console.log("Longitute card:\t" + lngRef);

  return latitude + " " + latRef + ", " + longitude + " " + lngRef;
}