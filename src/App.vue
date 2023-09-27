<template>
  <div id="app">
    <div class="content">
      <AppHeader />
      <Container>
        <h2>{{ text }}</h2>
        <ApartmentsFilterForm class="apartments-filter" @submit="filter" />
      </Container>

      <Container>
        <p class="not-found" v-if="!filteredApartments.length">Not found :(</p>
        <ApartmentsList v-else :items="filteredApartments">
          <template v-slot:apartment="{ apartment }">
            <ApartmentsItem
              :key="apartment.id"
              :descr="apartment.descr"
              :rating="apartment.rating"
              :imgSrc="apartment.imgUrl"
              :price="apartment.price"
            />
          </template>
        </ApartmentsList>
      </Container>
    </div>

    <AppFooter />
  </div>
</template>

<script>
import ApartmentsList from "./components/Apartment/ApartmentsList.vue";
import apartments from "./components/Apartment/apartments";
import ApartmentsItem from "./components/Apartment/ApartmentsItem.vue";
import ApartmentsFilterForm from "./components/Apartment/ApartmentsFilterForm.vue";
import Container from "./components/shared/Container.vue";
import AppFooter from "./components/shared/Footer.vue";
import AppHeader from "./components/shared/Header.vue";
export default {
  name: "App",
  data() {
    return {
      apartments,
      text: "",
      filters: {
        city: "",
        price: 0,
      },
    };
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
    AppFooter,
    AppHeader,
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
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.not-found {
  text-align: center;
  font-size: 23px;
  margin-top: 90px;
}
.content {
  flex-grow: 1;
  padding-top: 120px;
}
</style>
