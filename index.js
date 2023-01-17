let markers, map;

function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  markers.push(
    new google.maps.Marker({
      position: {
        lat: 43.1001200,
        lng: -79.0662700,
      },
      map,
      title: "Cataratas del Niágara",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 40.4165 ,
        lng: -3.70256,
      },
      map,
      title: "Madrid",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 51.50853,
        lng: -0.12574,
      },
      map,
      title: "Londres",
    })
  );
}