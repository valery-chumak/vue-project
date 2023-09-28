<template>
  <section class="reviews">
    <ReviewsItem
      :key="review.author"
      v-for="review in reviews"
      :review="review"
    />
  </section>
</template>

<script>
import ReviewsItem from "../Reviews/ReviewsItem/index.vue";
export default {
  name: "UserReviews",
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  components: { ReviewsItem },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.reviews {
  margin-top: 20px;
  background: $card-bg;
  padding: 0 2px;

  &__heading {
    padding: 20px 20px 10px;
  }

  &__title {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  &__rating {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__show-more {
    background: none;
    border: none;
    cursor: pointer;
    width: 100%;
    padding: 12px;
    font-family: inherit;
    font-size: 16px;
  }
}
</style>
