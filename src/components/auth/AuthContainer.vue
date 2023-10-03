<template>
  <div class="auth-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AuthContainer",
};
</script>

<style lang="scss" scoped>
.auth-container {
  width: 410px;
  height: 298px;
  padding: 30px;
  background: #fff;
}
</style>
