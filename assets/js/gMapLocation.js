function initMap() {
  var myLatLng = {lat: 13.067858, lng: 77.638919};

  var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 16,
	center: myLatLng
  });

  var marker = new google.maps.Marker({
	position: myLatLng,
	map: map,
	title: 'Sri Sai Krupa Ventures'
  });
}