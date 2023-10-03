<template>
  <header class="header">
    <Container>
      <AppLogo></AppLogo>
    </Container>
  </header>
</template>

<script>
import Container from "./Container.vue";
import AppLogo from "./Logo.vue";
export default {
  name: "AppHeader",
  components: {
    Container,
    AppLogo,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

.header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 60px;
  padding: 16px 0;
  background: $secondary-color;
}
</style>
