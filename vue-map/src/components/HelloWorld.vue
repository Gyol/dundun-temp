<template>
  <v-container id="map" style="margin: 0px; padding: 0px">
  <GmapMap
   :center="{lat:37.5095711, lng:127.0533331}"
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
export default {
  name: 'HelloWorld',

 data() {
  return {
   markers: [{
     position: {
      lat: 10.0,
      lng: 10.0
     }
    }, {
     position: {
      lat: 11.0,
      lng: 11.0
     }
    }]
  };
 },
 methods: {
  clickMarker: function () {  
      this.$dialog.confirm({
         text: "What's your name? <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Natgeologo.svg/1200px-Natgeologo.svg.png' height=100/><input value='input'></input>", title: 'Warning'});   
  }
 }
}
</script>