<template>
  <v-container id="map" style="margin: 0px; padding: 0px">
  <GmapMap
  ref="mapRef"
  :zoom="15"
  map-type-id="terrain"
  style="width: 99.5vw; height: 100vh"
  >
  <GmapMarker
   :key="index"
   v-for="(m, index) in markers"
   :position="m.position"
   :clickable="true"
   :draggable="true"
   @click="clickMarker"
  /> 
  </GmapMap> 
  </v-container>  
</template>

<script>
var lat, lng;
if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(
    function(pos) {
      lat = pos.coords.latitude;
      lng = pos.coords.longitude;
      alert("현재 위치는 : " + lat + ", "+ lng);
  });
}else {
    alert('GPS를 지원하지 않습니다');
}
export default {
  name: 'HelloWorld',
  data() {
    return {
    markers: [{
      position: {
      lat: 37,
      lng: 127.05
      }
    }, {
     position: {
      lat: 37,
      lng: 127.10
     }
    }]
  };
 },
 mounted () {
    this.$refs.mapRef.$mapPromise.then((map) => {
      map.panTo({lat: lat, lng: lng})
    })
},
 methods: {
  clickMarker: function () {  
      this.$dialog.confirm({
         text: "What's your name? <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Natgeologo.svg/1200px-Natgeologo.svg.png' height=100/><input value='input'></input>", title: 'Warning'});   
  }
 }
}
</script>