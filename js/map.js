function initMap(){
  var ola = {lat: 41.8313506, lng: -87.62705470000002};
  var map = new google.maps.Map(
    document.getElementById('map'), {
    zoom: 16, center: ola
    }
  );
  var marker = new google.maps.Marker({
    position: ola,
    map: map
  });
}