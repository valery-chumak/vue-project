<template>
  <AuthContainer class="registration">
    <MainTitle class="registration__title">Registration</MainTitle>
    <Form ref="form" class="registration__form" @submit="handleSubmit">
      <CustomInput
        name="name"
        placeholder="Name"
        v-model="formData.name"
        autocomplete="username"
        :rules="nameRules"
        class="registration__input"
      />
      <CustomInput
        name="email"
        placeholder="Email"
        v-model="formData.email"
        autocomplete="email"
        :rules="emailRules"
        class="registration__input"
      />
      <CustomInput
        name="password"
        type="password"
        placeholder="Password"
        v-model="formData.password"
        autocomplete="current-password"
        :rules="passwordRules"
        class="registration__input"
      />
      <CustomInput
        name="password"
        type="password"
        placeholder="Confirm password"
        v-model="formData.confirmPassword"
        autocomplete="current-password"
        :rules="confirmPassword"
        class="registration__input"
      />
      <Button :loading="loading" type="submit" class="registration__btn"
        >Register</Button
      >
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
import { registerUser } from "../../../services/authService";
import AuthContainer from "../../auth/AuthContainer.vue";
import MainTitle from "@/components/shared/MainTitle.vue";

export default {
  name: "RegistrationForm",
  components: { Form, CustomInput, Button, AuthContainer, MainTitle },
  data() {
    return {
      loading: false,
      formData: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    async handleSubmit() {
      const { form } = this.$refs;
      const isFormValid = form.validate();
      const { name, password, email } = this.formData;

      if (isFormValid) {
        try {
          this.loading = true;
          const { data } = await registerUser({ name, password, email });
          console.log(data);
          form.reset();
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
    nameRules() {
      return [this.rules.isRequired];
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired, this.rules.passwordValidation];
    },
    confirmPassword() {
      return [
        (val) => ({
          hasPassed: val === this.formData.password,
          message: "Password mismatch",
        }),
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.registration {
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
