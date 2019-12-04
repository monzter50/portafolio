<template>
  <header class="header">
    <div class="header__container">
      <div id="header__nav" class="header__nav ">
        <a href="/" class="header__brand" >Jose Antonio <br> Front-End Developer</a>
      </div>

      <nav id="navbar" class="navbar" v-bind:class="{active:isActive}">
            <ul class="navbar__nav" >
              <li class="navbar__item">
                <a href="#home"  class="navbar__link"  @click="isActive = false">Home</a>
              </li>
              <li class="navbar__item">
                <a href="#hard-skills"  class="navbar__link"  @click="isActive = false">Hard Skills</a>
              </li>
              <li class="navbar__item" >
                <a href="#portafolio"  class="navbar__link"  @click="isActive =false">Portafolio</a>
              </li>
              <!-- <li class="navbar__item" >
                <a href="#contact"  class="navbar__link"  @click="isActive = false">Contact</a>
              </li> -->
            </ul>
        
      </nav>
      <div class="header__items">
        <button type="button" class="header__toggler" @click="isActive = !isActive">
          <div class="hamburguer" v-bind:class="{active:isActive}">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </div>
   
  </header>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'navbar',
  components: {
    // HelloWorld
  },
   data: function () {
    return {
      isActive: false,
    }
  },
}
</script>
