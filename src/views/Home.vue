<template>
  <div class="monster-grid">
    <navbar-component />

    <main class="main">
      <header-layout/>
      <skills/>
      <portafolio-vue/>
    </main>
    <footer-layout />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterLayout from "@/components/FooterLayout.vue";
import HeaderLayout from "@/components/HeaderLayout";
import PortafolioVue from '@/components/Portafolio';
import Skills from '@/components/Skills';
export default {
  name: "home",
  components: {
    NavbarComponent,
    FooterLayout,
    HeaderLayout,
    PortafolioVue,
    Skills
  },
 
  methods: {
    goTodetail(proId, name, description) {
      let query = {
        proId: proId,
        name: name,
        description: description
      };
      return this.$router.push({ name: "details", params: query }); // -> /user/123
    }
  }
};
</script>
