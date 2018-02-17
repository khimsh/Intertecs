// Load Google Maps
function initMap() {
  var intertecs = {lat: 41.710038, lng: 44.754758};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: intertecs
  });
  var marker = new google.maps.Marker({
    position: intertecs,
    map: map
  });
  var mapShop = new google.maps.Map(document.getElementById('mapShop'), {
    zoom: 18,
    center: intertecs
  });
  var shopMarker = new google.maps.Marker({
    position: intertecs,
    map: mapShop
  });
}


