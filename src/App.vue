<template>
  <div id="app">
    <Navbar />
    <b-container>
    <router-view/>
    </b-container>
  </div>
</template>

<script>
import Navbar from "./components/Navbar"
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      
    }
  },
  

}
</script>


<style>
</style>
