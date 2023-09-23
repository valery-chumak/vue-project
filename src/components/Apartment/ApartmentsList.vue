<template>
  <ContainerVue
    ><div class="apartments-list">
      <ApartmentsItem
        class="apartmnets-list__item"
        v-for="{ id, descr, rating, imgUrl, price } in items"
        :key="id"
        :descr="descr"
        :rating="rating"
        :imgSrc="imgUrl"
        :price="price"
      />
    </div>
  </ContainerVue>
</template>

<script>
import ContainerVue from "../shared/Container.vue";
import ApartmentsItem from "./ApartmentsItem.vue";

export default {
  name: "ApartmentsList",
  components: { ContainerVue, ApartmentsItem },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;

  &__item {
    margin-bottom: 30px;
  }
}
</style>
