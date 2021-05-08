// script.js
var map;

function initMap() {
  
  var seoul = { lat: 37.57513 ,lng: 126.97716 };
  map = new google.maps.Map( document.getElementById('map1'), {
      zoom: 12,
      center: seoul
    });

  new google.maps.Marker({
    position: seoul,
    map: map,
    label: "Kyobo Bookstore Gwanghwamun Branch (Seoul)"
  });
}
