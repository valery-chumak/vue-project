<template>
  <div class="wrapper">
    <img src="../../img/svg/logo.svg" alt="logo" />
    <router-link :to="{ name: 'homepage' }" class="logo__link"></router-link>
  </div>
</template>

<script>
export default {
  name: "AppLogo",
};
</script>

<style lang="scss" scoped>
.logo__link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
