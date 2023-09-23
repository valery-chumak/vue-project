<template>
  <div :id="$style.app">
    <ApartmentsList :items="apartments" />
  </div>
</template>

<script>
import ApartmentsList from "./components/Apartment/ApartmentsList.vue";
import apartments from "./components/Apartment/apartments";
export default {
  name: "App",
  data() {
    return {
      apartments,
      apartment: {
        id: "1",
        title: "Apartment Kyiv",
        descr:
          "Beautiful view from your window. Situated on Yaroslaviv Val street. Cozy with all furniture.",
        price: 9079,
        rating: 4.7,
        location: {
          city: "Kyiv",
        },
        owner: {
          name: "Igor",
          phone: "0669401013",
          email: "mail@gmail.com",
        },
      },
    };
  },
  components: { ApartmentsList },
};
</script>

<style module>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
