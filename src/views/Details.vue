<template>
  <div class="monster-grid">
    <NavbarComponent/>
    <main class="main">
      <section class="jumbtron" id="home">
          <div class="monster">
            <img src="../assets/image/computer.png" class="monster-dev" alt="Monster Developer">
            <article class="text-center monster-content">
              <h1 class="margin--none">Hi, I'm a  Front-end developer <br>from Cancún, Q.Roo.</h1>
              <a href="#about"><i class="fas fa-angle-down arrow-down"></i></a>
            </article> 
          </div>
      </section>
    </main>
    <FooterLayout/>
  </div>

</template>

<script>
// @ is an alias to /src
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterLayout from '@/components/FooterLayout.vue'

export default {
  name: 'home',
  components: {
    NavbarComponent,
    FooterLayout
  },
   data: function () {
    return {
      flipedDev: false,
      flipedDes: false,
      flipedFront: false,
    }
  },
  methods:{
      goTodetail (proId, name, description) {
      let query={
        proId:proId,
        name:name,
        description:description
      }
      return this.$router.push({ name: 'details', params: query }) // -> /user/123
    }
  }
}
</script>