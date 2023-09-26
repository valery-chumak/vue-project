<template>
  <div :id="$style.app">
    <h2>{{ text }}</h2>
    <CustomSelect :items="['name', 'label', 'salary']" />
    <CustomInput v-model="text" />
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
import CustomInput from "./components/shared/CustomInput.vue";
import CustomSelect from "./components/shared/CustomSelect.vue";
export default {
  name: "App",
  data() {
    return {
      apartments,
      text: "",
    };
  },
  components: { ApartmentsList, ApartmentsItem, CustomInput, CustomSelect },
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
