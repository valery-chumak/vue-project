<template>
  <button
    v-on="$attr"
    v-bind:type="type"
    :class="{ btn: true, 'btn--outlined': outlined }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MainButton",
  props: {
    type: {
      type: String,
      default: "button",
    },
    outlined: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  width: 349px;
  height: 56px;
  background: #ff662d;
  padding: 8px 15px;
  border: none;
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &--outlined {
    border: #ff662d 1px solid;
    background-color: #fff;
    color: black;
  }
}
</style>
