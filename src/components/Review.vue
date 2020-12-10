<template>
  <div>
    <b-button v-b-modal.modal-lg @click="reDirect">Write review</b-button>
    <b-modal
      v-show="status == true"
      id="modal-lg"
      size="lg"
      title="Review"
      ok-only
      ok-title="Cancle"
    >
      <b-form @submit.prevent="onSubmit">
        <b-form-group id="textarea" label="Review">
          <b-form-textarea
            id="textarea"
            v-model="review"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
        <b-form-group label="Rating">
          <b-form-select
            v-model="select"
            :options="options"
            class="mb-3"
            value-field="item"
            text-field="name"
            disabled-field="notEnabled"
          ></b-form-select>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import data from "../data";
export default {
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      review: null,
      select: "Top knoch",
      options: [
        { item: "Top knoch", name: "Top knoch" },
        { item: "Best", name: "Best" },
        { item: "Average", name: "Average" },
        { item: "Bad", name: "Bad" },
      ],
      image: "http://dummyimage.com/242x187.jpg/5fa2dd/ffffff",
      newreview: {
        name: "pulkit",
        rev: "",
        reviewer_image: "",
        review_date: "14.07.2008",
        rating: "",
      },
    };
  },
  computed: {
    status() {
      return this.$store.getters.getStatus;
    },
  },
  methods: {
    onSubmit() {
      this.newreview.rev = this.review;
      this.newreview.reviewer_image = this.image;
      this.newreview.rating = this.select;
      this.$emit("getReview", this.newreview);
      this.review = null;
      this.select = null;
    },
    reDirect() {
      if (this.status != true) {
        this.$router.push({ path: "/login" });
      }
    },
  },
};
</script>

<style></style>
