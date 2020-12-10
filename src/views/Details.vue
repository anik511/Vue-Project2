<template>
  <div class="mt-4 mb-5">
    <b-card no-body class="overflow-hidden" style="max-width: 100%">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            :src="review.movie_poster"
            alt="Image"
            class="rounded-0 "
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body :title="review.movie_title" :sub-title="review.director">
            <b-card-text> {{ review.genres }}<br />{{ msg }} </b-card-text>
            <Review class="mt-4" :id="id" @getReview="setComment" />
          </b-card-body>
        </b-col>

        <Comments :reviewers="commenters"></Comments>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import data from "../data";
import userdata from "../userdata";
import Comments from "../components/Comments";
import Review from "../components/Review";
export default {
  components: {
    Comments,
    Review,
  },
  data() {
    return {
      id: this.$route.params.id,
      // commenters: null,
      msg:
        "Some quick example text to build on the card and make up the bulk of the card's content. Some quick example text to build on the card and make up the bulk of the card's content. Some quick example text to build on the card and make up the bulk of the card's content.",
    };
  },
  computed: {
    review() {
      return this.$store.getters.reviewdetais;
    },
    commenters() {
      return this.review.reviewers;
    },
  },
  mounted() {
    this.findReview();
  },
  methods: {
    findReview() {
      var rev = data.find((rev) => rev.id == this.id);
      this.$store.dispatch("setreviewdetais", rev);
      console.log(rev);
      // this.commenters = this.review.reviewers;
      console.log(this.commenters);
    },
    setComment(comment) {
      this.review.reviewers.push(comment);
    },
  },
};
</script>

<style>
.rounded-0 {
  height: 300px !important;
}
</style>
