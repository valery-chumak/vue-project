<template>
  <section class="reviews">
    <div class="reviews__heading">
      <h2 class="reviews__title">Summary rating</h2>
      <div class="reviews__rating">
        <span>{{ amountOfReviews }} review(s)</span>
        <StarRating :rating="totalRating" />
      </div>
    </div>
    <ReviewsItem
      :key="review.author"
      v-for="review in currentReviews"
      :review="review"
    />
    <button class="reviews__show-more" @click="toggleReviews">
      {{ buttonText }}
    </button>
  </section>
</template>

<script>
import ReviewsItem from "../reviews/ReviewsItem/index.vue";
import StarRating from "../shared/StarRating.vue";

export default {
  name: "UserReviews",
  data() {
    return { reviewsLimit: 2 };
  },
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  components: { ReviewsItem, StarRating },
  computed: {
    totalRating() {
      const total = this.reviews.reduce(
        (acc, review) => acc + review.rating,
        0
      );
      return total / this.reviews.length;
    },
    amountOfReviews() {
      return this.reviews.length;
    },
    currentReviews() {
      return this.reviews.slice(0, this.reviewsLimit);
    },
    buttonText() {
      return this.reviewsLimit === this.reviews.length
        ? "Hide"
        : "Show more...";
    },
  },
  methods: {
    toggleReviews() {
      if (this.reviewsLimit === this.reviews.length) {
        this.reviewsLimit = 2;
      } else {
        this.reviewsLimit = this.reviews.length;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.reviews {
  width: 350px;
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
    transition: all 0.4s;

    &:hover {
      background: rgb(114, 160, 225);
      color: white;
    }
  }
}
</style>
