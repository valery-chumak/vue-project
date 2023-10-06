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
import { mapActions } from "vuex";
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
    ...mapActions("auth", ["login"]),
    async handleSubmit() {
      const { form } = this.$refs;
      const isFormValid = form.validate();

      if (isFormValid) {
        try {
          this.loading = true;

          await this.login(this.formData);

          this.$router.push({ name: "homepage" });
          form.reset();
        } catch (error) {
          this.$notify({
            type: "error",
            title: "Error occured",
            text: error.message,
          });
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
