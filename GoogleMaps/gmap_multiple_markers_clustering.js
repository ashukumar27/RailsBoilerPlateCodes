 function initMap() {

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 3,
          center: {lat: 28.7041, lng: 77.1045}
        });

        // Create an array of alphabetical characters used to label the markers.
        var labels = [
        'Alpha','Bravo','Charlie','Dog'	
        ];

        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.
        var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }
      var locations = [
        {lat: 28.5041, lng: 76.1245},
        {lat: 28.7041, lng: 78.445},
        {lat: 28.741, lng: 77.2045},
        {lat: 28.7143, lng: 77.1045}
      ]