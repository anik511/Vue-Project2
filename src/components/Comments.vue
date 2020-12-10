<template>
  <div>
    <b-media
      class="ml-4 mt-2"
      v-for="(reviewer, index) in reviewers"
      :key="index"
    >
      <template #aside>
        <b-img
          :src="reviewer.reviewer_image"
          width="64"
          alt="placeholder"
        ></b-img>
      </template>

      <h5 class="mt-0">{{ reviewer.name }}</h5>
      <p class="mb-0">
        <b>Rating: {{ reviewer.rating }}</b
        ><br />{{ reviewer.rev }}
      </p>
      <small class="text-muted">{{ reviewer.review_date }}</small>
    </b-media>
  </div>
</template>

<script>
export default {
  props: {
    reviewers: {
      type: Array,
    },
  },
  data() {
    return {};
  },
};
</script>

<style></style>
