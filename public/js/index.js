let map;

// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
function initAutocomplete() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 36.1516, lng: -95.9885 },
    zoom: 15,
    mapTypeId: "roadmap",
  });
  const styles = {
  hide: [
    {
      featureType: "poi.business",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "transit",
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }],
    },
  ],
};
  
  map.setOptions({ styles: styles["hide"] });

  const uluru = { lat: 36.15839520000001, lng: -95.9946482 };

  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });

  
}

