<template>
  <section class="custom-section">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "CustomSection",
};
</script>

<style lang="scss" scoped>
.custom-section {
  padding-top: 120px;
}
</style>
