<template>
  <div class="wrapper-input">
    <input
      v-on="attrs"
      v-bind="$attrs"
      @blur="blurHandler"
      :value="value"
      class="custom-input"
      :class="!isValid && 'custom-input--error'"
    />
    <span v-if="!isValid" class="custom-input__error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  data() {
    return {
      isValid: true,
      error: "",
      isFirstInput: true,
    };
  },
  inject: {
    form: {
      default: null,
    },
  },
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: "",
    },
    errorMessage: {
      type: String,
      default: "",
    },
    rules: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    value() {
      if (this.isFirstInput) return;
      this.validate();
    },
  },
  computed: {
    attrs() {
      return {
        ...this.$attrs,
        input: (event) => this.$emit("input", event.target.value),
      };
    },
  },
  methods: {
    validate() {
      this.isValid = this.rules.every((rule) => {
        const { hasPassed, message } = rule(this.value);

        if (!hasPassed) {
          this.error = message || this.errorMessage;
        } else {
          this.error = "";
          this.isValid = true;
        }

        return hasPassed;
      });

      return this.isValid;
    },
    blurHandler() {
      if (this.isFirstInput) {
        this.validate();
      }
      this.isFirstInput = false;
    },
    reset() {
      this.isValid = true;
      this.error = "";
      this.isFirstInput = true;
      this.$emit("input", "");
    },
  },
  mounted() {
    if (!this.form) return;

    this.form.registerInput(this);
  },
  beforeUnmount() {
    if (!this.form) return;

    this.form.unRegisterInput(this);
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";
.wrapper-input {
  position: relative;
}
.custom-input {
  height: 40px;
  width: 100%;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8px 15px;

  &::placeholder {
    color: inherit;
  }
  &--error {
    border-color: red;
  }

  &__error {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    font-size: 12px;
    color: red;
    line-height: 1.3;
  }
}
</style>
