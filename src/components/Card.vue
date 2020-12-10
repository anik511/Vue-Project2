<template>
  <div>
    <b-card-group columns>
      <router-link
        tag="div"
        v-for="(review, index) in reviews"
        :key="index"
        :to="{ path: '/details/' + review.id }"
      >
        <b-card
          :title="review.movie_title"
          :img-src="review.movie_poster"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2 mt-2"
        >
          <b-card-text>{{ review.genres }}<br />{{ msg }}</b-card-text>
        </b-card>
      </router-link>
    </b-card-group>
  </div>
</template>

<script>
import data from "../data";
export default {
  name: "Card",
  props: {},
  data() {
    return {
      msg:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    };
  },
  computed: {
    reviews() {
      return this.$store.getters.reviews;
    },
  },
  mounted() {
    this.fetchReviews();
  },
  methods: {
    fetchReviews() {
      this.$store.dispatch("setReviews", data);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
