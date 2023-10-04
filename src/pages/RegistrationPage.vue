<template>
  <main class="registration">
    <AuthSection>
      <RegistrationForm />
    </AuthSection>
  </main>
</template>

<script>
import AuthSection from "@/components/auth/AuthSection.vue";
import RegistrationForm from "../components/auth/Registration/index.vue";
export default {
  name: "RegistrationPage",
  components: { AuthSection, RegistrationForm },
};
</script>

<style lang="scss" scoped></style>
