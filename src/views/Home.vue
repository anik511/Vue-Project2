<template>
  <div>
    <b-container>
      <Card />
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components: {
    Card,
  },

};
</script>
