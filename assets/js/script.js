/*------- Locaton Map --------*/

var map = L.map('map').setView([0, 0], 1);

      L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=JirbcBhhMNnI5MS919bO', {
        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        
      }).addTo(map);

      var marker = L.marker([37.984672812077115, -121.86756316507547]).addTo(map);
      marker.bindPopup("<b>Lemon Farm California</b><br>This is one of the locations where lemons are farmed.California produces more lemons than all of Europe.  Citrus has been grown in the San Joaquin Valley for over 100 years and is now a $2 billion industry.").openPopup();
      

      var marker = L.marker([-14.205814, -44.540444]).addTo(map);
      marker.bindPopup("<b>Lemon Farm Brazil</b><br>This farm was founded in 1995 by one of our CEOs James Corol. You are welcome to visit us anytime during weekdays and participate in Lemonade tasting from fresh local lemons.").openPopup();

      var marker = L.marker([1.8256550272567535, 103.7905884185924]).addTo(map);
      marker.bindPopup("<b>Lemon Farm Woodlands Malaysia</b><br> One of our oldest farms founded 1984 by previous CEO Farah Duha. If you want to experience fusion Lemonade this is the place to be. We olso ship world wide our products from this farm").openPopup();

      var marker = L.marker([38.956561, -1.840105]).addTo(map);
      marker.bindPopup("<b>Lemon Farm Albacete Spain</b><br> This our new born child farm founded in 2015 great palce to visit our local shop where you can buy lemons and lemonade. Custom made tools also availible for purches").openPopup();

      var popup = L.popup();
      38.956561, -1.840105
      function onMapClick(e) {
          popup
              .setLatLng(e.latlng)
              .setContent("You clicked the map at " + e.latlng.toString())
              .openOn(map);
      }
      
      map.on('click', onMapClick);

   