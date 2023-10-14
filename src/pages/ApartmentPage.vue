<template>
  <main class="apartment-page">
    <CustomSection>
      <Container>
        <CircleLoader
          class="apartment-page__loader"
          v-if="isLoading"
          color="orange"
          width="98"
          height="98"
        />
        <div v-if="apartment && !isLoading" class="apartment-page__content">
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
    </CustomSection>
  </main>
</template>

<script>
import Container from "@/components/shared/Container.vue";
import ApartmentsMainInfo from "../components/apartment/ApartmentsMainInfo.vue";
import ApartmentOwner from "@/components/apartment/ApartmentsOwner.vue";
import UserReviews from "../components/reviews/index.vue";
import reviewsList from "../components/reviews/reviews.json";
import { getApartmentById } from "../services/apartmentsService";
import CustomSection from "@/components/shared/CustomSection.vue";
import CircleLoader from "@/components/loaders/Circle.vue";
export default {
  name: "ApartmentPage",
  data() {
    return {
      apartment: null,
      isLoading: false,
    };
  },
  async created() {
    try {
      this.isLoading = true;
      const { id } = this.$route.params;
      const { data } = await getApartmentById(id);
      this.apartment = data;
    } catch (error) {
      this.$notify({
        type: "error",
        title: "Error occured",
        text: error.message,
      });
    } finally {
      this.isLoading = false;
    }
  },
  computed: {
    reviewsList() {
      return reviewsList;
    },
  },
  components: {
    Container,
    UserReviews,
    ApartmentsMainInfo,
    ApartmentOwner,
    CustomSection,
    CircleLoader,
  },
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
  &__loader {
    position: absolute;
    top: 50%;
    left: 50%;
  }
}
</style>
