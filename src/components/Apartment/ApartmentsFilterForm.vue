<template>
  <form class="form" @submit.prevent="handleSubmit">
    <CustomSelect :items="cities" v-model="city" class="form__select" />
    <CustomInput
      v-model="price"
      type="number"
      placeholder="Price, from"
      error-message="Must not be empty"
      :rules="rules"
    />
    <SubmitButton type="submit" class="form__submit"> Find </SubmitButton>
  </form>
</template>

<script>
import CustomInput from "../shared/CustomInput.vue";
import CustomSelect from "../shared/CustomSelect.vue";
import SubmitButton from "../shared/Button.vue";
import { isRequired, charLimit } from "../../utils/validationRules";
export default {
  name: "FilterForm",

  data() {
    return {
      price: "",
      city: "",
    };
  },
  components: {
    CustomInput,
    CustomSelect,
    SubmitButton,
  },
  computed: {
    cities() {
      return [
        { value: "", label: "City", selected: true },
        "Kyiv",
        "Kharkiv",
        "Odessa",
        "Irpin",
        "Lviv",
        "Poltava",
        "Rivne",
      ];
    },
    rules() {
      return [isRequired, charLimit(10)];
    },
  },
  methods: {
    handleSubmit() {
      this.$emit("submit", { city: this.city, price: this.price });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  &__select {
    margin-right: 30px;
  }
  &__submit {
    margin-left: auto;
  }
}
</style>
