// Load Google Maps
function initMap() {
  var intertecs = {lat: 41.710038, lng: 44.754758};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: intertecs
  });
  var marker = new google.maps.Marker({
    position: intertecs,
    map: map
  });
  var shop = {lat: 41.790404, lng: 44.755072};
  var mapShop = new google.maps.Map(document.getElementById('mapShop'), {
    zoom: 14,
    center: shop
  });
  var shopMarker = new google.maps.Marker({
    position: shop,
    map: mapShop
  });
}


