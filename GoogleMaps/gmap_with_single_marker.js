function initMap() {

		var options = {
			center:{
				lat: 28.7041, lng: 77.1045
			},
			zoom: 9,
			disableDefaultUI: false, //for enabling/disbling zoom scale 
			scrollwheel: true, //stops zooming in/out of the map due to scrolling
			draggable: true, //Does not allow dragging the map
			mapTypeId: 'roadmap', //'terrain' 'satellite' 'hybrid' 'roadmap'
			maxZoom: 12,  //Maximum zoom
			minZoom: 4,  //Minimum Zoom
			zoomControlOptions: {},  //Options for the zoom markers
			panControlOptions:{} //Options for the PAN markers
		};
		var element = document.getElementById('map');

        var map = new google.maps.Map(element, options);

        var marker = new google.maps.Marker({
          position: {
          	lat: 28.7041,
          	lng: 77.1045
          },
          map: map
        });
}