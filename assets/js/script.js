/*------- Locaton Map --------*/

var map = L.map('map').setView([0, 0], 1);

      L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=JirbcBhhMNnI5MS919bO', {
        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        
      }).addTo(map);

      var marker = L.marker([37.984672812077115, -121.86756316507547]).addTo(map);
      marker.bindPopup("<b>Lemon Farm</b><br>This is one of the locations where lemons are farmed.California produces more lemons than all of Europe.  Citrus has been grown in the San Joaquin Valley for over 100 years and is now a $2 billion industry.").openPopup();

      var popup = L.popup();

      function onMapClick(e) {
          popup
              .setLatLng(e.latlng)
              .setContent("You clicked the map at " + e.latlng.toString())
              .openOn(map);
      }
      
      map.on('click', onMapClick);