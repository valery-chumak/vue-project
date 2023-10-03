<template>
  <main class="login">
    <AuthSection>
      <LoginForm />
    </AuthSection>
  </main>
</template>

<script>
import AuthSection from "@/components/auth/AuthSection.vue";
import LoginForm from "../components/auth/Login/index.vue";

export default {
  name: "LoginPage",
  components: { LoginForm, AuthSection },
};
</script>

<style lang="scss" scoped></style>
