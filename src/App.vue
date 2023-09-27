<template>
  <div id="app">
    <Container>
      <h2>{{ text }}</h2>
      <ApartmentsFilterForm class="apartments-filter" @submit="logger" />
    </Container>
    <ApartmentsList :items="apartments">
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
  </div>
</template>

<script>
import ApartmentsList from "./components/Apartment/ApartmentsList.vue";
import apartments from "./components/Apartment/apartments";
import ApartmentsItem from "./components/Apartment/ApartmentsItem.vue";
import ApartmentsFilterForm from "./components/Apartment/ApartmentsFilterForm.vue";
import Container from "./components/shared/Container.vue";
export default {
  name: "App",
  data() {
    return {
      apartments,
      text: "",
    };
  },
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentsFilterForm,
    Container,
  },
  methods: {
    logger(value) {
      console.log(value, "form value");
    },
  },
};
</script>

<style module lang="scss" scoped>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
