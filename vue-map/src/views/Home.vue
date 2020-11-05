<template>
  <v-div class="home" style="width: 99vw; height: 100vh">
    <SlideBar/>
    <HelloWorld/>
  </v-div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import SlideBar from '@/components/SlideBar.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    SlideBar
  }
}
</script>
