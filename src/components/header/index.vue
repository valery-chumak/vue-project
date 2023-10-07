<template>
  <header class="header">
    <Container>
      <div class="header__content">
        <router-link to="/">
          <AppLogo />
        </router-link>

        <AccountActions v-if="isLoggedIn" />
        <AuthActions v-else />
      </div>
    </Container>
  </header>
</template>

<script>
import Container from "../shared/Container.vue";
import AppLogo from "../shared/Logo.vue";
import AccountActions from "./AccountActions.vue";
import AuthActions from "./AuthActions.vue";
import { mapGetters } from "vuex";

export default {
  name: "AppHeader",
  components: {
    Container,
    AppLogo,
    AuthActions,
    AccountActions,
  },
  computed: {
    ...mapGetters("auth", ["isLoggedIn"]),
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

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
