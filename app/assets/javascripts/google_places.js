var markers = [];

$(document).on('click', '#load-docs-on-map', function() {
  loadPlacesFromMapCenter(true)
})

function loadPlacesFromMapCenter(gplace_load) {
    if(handler) {
    var center = handler.getMap().getCenter()
    var filter_names = _.map($('#location-filters').find(':checked'), function(input){ return $(input).attr('name'); });
    var data = { lat: center.lat(), lng: center.lng(), filters: filter_names, gplace_load: gplace_load}
    var url = $('#load-docs-on-map').data('url')
    if(url) {
      $('#load-docs-on-map').html('Loading...')
      $.get(url, data).done(function (data) {
        $('#load-docs-on-map').html('Click to load more');
        addNewMarkers(data)
      });
    }
  }
}


$(function () {
  $("#search_box")
    .geocomplete()
    .bind("geocode:result", function(event, result){
      var map = handler.getMap()
      map.setCenter(result.geometry.location)
      map.setZoom(15)
      loadPlacesFromMapCenter(false);
    });
})

function addOffsetOnSameLocations(markers) {
  // This will store count of lat lng pair which will be to add offset to lng
  var tmp_hash = {}
  // algo to add small offset in lng for same lat lng locations from google
  _.each(markers, function (marker) {
    if(_.has(tmp_hash, [marker.lat, marker.lng])) {
      var hash_key = [marker.lat, marker.lng]
      marker.lng +=  ((tmp_hash[hash_key] + 0.1) * 0.05) / 1500
      tmp_hash[hash_key] += 1
    }
    else {
      tmp_hash[[marker.lat, marker.lng]] = 1
    }
  })
}

function addNewMarkers(data) {
  handler.removeMarkers(markers);
  if(data.length > 0) {
    addOffsetOnSameLocations(data)
    markers = handler.addMarkers(data);
    handler.bounds.extendWith(markers);
    handler.fitMapToBounds();
  }
}
