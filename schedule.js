function setBounds() {
    google_allowedBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(-85.000, -122.591),
    new google.maps.LatLng(85.000, -122.333));
    google_lastCenter = google_map.getCenter();
    google_lastZoom = google_map.getZoom();
    google.maps.event.addListener(google_map, "bounds_changed", function () {
        checkBounds();
    });

    google.maps.event.addListener(google_map, 'center_changed', function () {
        checkBounds();
    });
}

function checkBounds() {
    if (google_allowedBounds.getNorthEast().lat() > google_map.getBounds().getNorthEast().lat()) {
        if(google_allowedBounds.getSouthWest().lat() < google_map.getBounds().getSouthWest().lat()) {
            google_lastCenter = google_map.getCenter();
            google_lastZoom = google_map.getZoom();
            return true;
        }
    }
    google_map.panTo(google_lastCenter);
    google_map.setZoom(google_lastZoom);
    return false;
}