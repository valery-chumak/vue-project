<template>
  <main class="homepage">
    <CustomSection>
      <Container>
        <ApartmentsFilterForm class="apartments-filter" @submit="filter" />
      </Container>

      <Container>
        <CircleLoader
          class="homepage__loader"
          v-if="isLoading"
          color="orange"
          width="98"
          height="98"
        />
        <p class="not-found" v-if="!filteredApartments.length && !isLoading">
          Not found :(
        </p>
        <ApartmentsList v-else :items="filteredApartments">
          <template v-slot:apartment="{ apartment }">
            <ApartmentsItem
              :key="apartment.id"
              :id="apartment.id"
              :descr="apartment.descr"
              :rating="apartment.rating"
              :imgSrc="apartment.imgUrl"
              :price="apartment.price"
            />
          </template>
        </ApartmentsList>
      </Container>
    </CustomSection>
  </main>
</template>

<script>
import ApartmentsList from "../components/apartment/ApartmentsList.vue";
import ApartmentsItem from "../components/apartment/ApartmentsItem.vue";
import ApartmentsFilterForm from "../components/apartment/ApartmentsFilterForm.vue";
import Container from "../components/shared/Container.vue";
import { getApartmentsList } from "../services/apartmentsService";
import CustomSection from "@/components/shared/CustomSection.vue";
import CircleLoader from "@/components/loaders/Circle.vue";
export default {
  name: "HomePage",
  data() {
    return {
      apartments: [],
      text: "",
      filters: {
        city: "",
        price: 0,
      },
      isLoading: false,
    };
  },
  async created() {
    try {
      this.isLoading = true;
      const { data } = await getApartmentsList();
      this.apartments = data;
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
    filteredApartments() {
      return this.filterByCityName(this.filterByPrice(this.apartments));
    },
  },
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentsFilterForm,
    Container,
    CustomSection,
    CircleLoader,
  },
  methods: {
    filter({ city, price }) {
      this.filters.city = city;
      this.filters.price = price;
    },
    filterByCityName(apartments) {
      if (!this.filters.city) return apartments;

      return apartments.filter((apartment) => {
        return apartment.location.city === this.filters.city;
      });
    },
    filterByPrice(apartments) {
      if (!this.filters.price) return apartments;

      return apartments.filter((apartment) => {
        return apartment.price >= this.filters.price;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.not-found {
  text-align: center;
  font-size: 23px;
  margin-top: 90px;
}
.homepage__loader {
  position: absolute;
  top: 50%;
  left: 50%;
}
</style>
