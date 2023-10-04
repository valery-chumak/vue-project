<template>
  <AuthContainer class="login">
    <MainTitle class="login__title">Login</MainTitle>
    <Form ref="form" class="login__form" @submit="handleSubmit">
      <CustomInput
        name="email"
        placeholder="Email"
        v-model="formData.email"
        autocomplete="email"
        :rules="emailRules"
        class="login__input"
      />
      <CustomInput
        name="password"
        type="password"
        placeholder="Password"
        v-model="formData.password"
        autocomplete="current-password"
        :rules="passwordRules"
      />
      <Button :loading="loading" type="submit" class="login__btn">Login</Button>
    </Form>
  </AuthContainer>
</template>

<script>
import Button from "../../shared/Button.vue";
import CustomInput from "../../shared/CustomInput.vue";
import Form from "../../shared/Form/index.vue";
import {
  emailValidation,
  passwordValidation,
  isRequired,
} from "../../../utils/validationRules";
import { loginUser } from "../../../services/authService";
import AuthContainer from "../../auth/AuthContainer.vue";
import MainTitle from "@/components/shared/MainTitle.vue";

export default {
  name: "LoginForm",
  components: { Form, CustomInput, Button, AuthContainer, MainTitle },
  data() {
    return {
      loading: false,
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async handleSubmit() {
      const isFormValid = this.$refs.form.validate();

      if (isFormValid) {
        try {
          this.loading = true;
          const { data } = await loginUser(this.formData);
          console.log(data);
        } catch (error) {
          console.log(error);
        } finally {
          this.loading = false;
        }
      }
    },
  },
  computed: {
    rules() {
      return { emailValidation, passwordValidation, isRequired };
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired];
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  &__form {
    display: block;
    flex-direction: column;
  }

  &__title {
    text-align: center;
    margin-bottom: 20px;
  }

  &__input {
    margin-bottom: 20px;
    width: 100%;
  }

  &__btn {
    margin-top: 40px;
    width: 100%;
  }
}
</style>
