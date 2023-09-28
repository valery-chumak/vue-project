<template>
  <main class="apartment-page">
    <Container>
      <div class="apartment-page__content">
        <ApartmentsMainInfo :apartment="apartment" />

        <div class="apartment-page__additional-info">
          <ApartmentOwner
            class="apartment-page__owner"
            :owner="apartment.owner"
          />
          <UserReviews :reviews="reviewsList" />
        </div>
      </div>
    </Container>
  </main>
</template>

<script>
import Container from "@/components/shared/Container.vue";
import apartments from "../components/Apartment/apartments";
import ApartmentsMainInfo from "@/components/Apartment/ApartmentsMainInfo.vue";
import ApartmentOwner from "@/components/Apartment/ApartmentsOwner.vue";
import UserReviews from "../components/Reviews/index.vue";
import reviewsList from "../components/Reviews/reviews.json";
export default {
  name: "ApartmentPage",

  computed: {
    reviewsList() {
      return reviewsList;
    },
    apartment() {
      return apartments.find(
        (apartment) => apartment.id == this.$route.params.id
      );
    },
  },
  components: { Container, UserReviews, ApartmentsMainInfo, ApartmentOwner },
};
</script>

<style lang="scss" scoped>
.apartment-page {
  padding-bottom: 72px;

  &__content {
    display: flex;
    align-items: start;
  }

  &__additional-info {
    margin-left: 30px;
    max-width: 350px;
    flex-grow: 0;
    flex-shrink: 1;
  }
}
</style>
