<template>
  <main class="my-orders-page">
    <CustomSection>
      <Container>
        <section class="my-orders-page__content">
          <MainTitle>Orders</MainTitle>
          <OrdersList :items="orders" />
        </section>
      </Container>
    </CustomSection>
  </main>
</template>

<script>
import CustomSection from "@/components/shared/CustomSection.vue";
import Container from "@/components/shared/Container.vue";
import MainTitle from "@/components/shared/MainTitle.vue";
import OrdersList from "@/components/my-orders/OrdersList.vue";
import { getOrders } from "../services/orderService";
export default {
  name: "MyOrdersPage",
  components: { CustomSection, Container, MainTitle, OrdersList },
  data() {
    return {
      orders: [],
    };
  },
  async created() {
    try {
      const { data } = await getOrders();
      this.orders = data;
    } catch (error) {
      this.$notify({
        type: "error",
        title: "Error occured",
        text: error.message,
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.my-orders-page {
  &__content {
    max-width: 730px;
    margin: 0 auto 100px;
  }
}
</style>
