GoogleMapsLoader.KEY = 'AIzaSyDP13T048ji9u8_di9Gdpmh6bkBhPoC3bs';
GoogleMapsLoader.LANGUAGE = 'ua';

if(document.getElementById('map')) {
  GoogleMapsLoader.load(function(google) {
    var myLatLng = {lat: 34.216503, lng: -119.067377};

    var shops = [
      ['Магазин «Lora Iris»', 50.407288, 30.666116, 13]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: shops[shops.length - 1][1], lng: shops[shops.length - 1][2]},
	    scrollwheel:false,
	    zoom: 13
    });

    for (var i = 0; i < shops.length; i++) {
      var shop = shops[i];
      var marker = new google.maps.Marker({
        map: map,
        position: {lat: shop[1], lng: shop[2]},
        animation: google.maps.Animation.DROP,
        title: shop[0],
        zIndex: shop[3]
      });
    };
  });
};