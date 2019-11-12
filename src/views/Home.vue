<template>
  <div class="monster-grid">
    <NavbarComponent/>
    <main class="main">
        <section class="hero" id="home">
          <div class="monster">
            <img src="../assets/image/jose.png" class="monster-dev" alt="Monster Developer">
            <article class="text-center monster-content">
              <h1 class="margin--none">Hi, I'm a  Front-end developer <br>from Cancún, Q.Roo.</h1>
              <!-- <a href="#about"><i class="fas fa-angle-down arrow-down"></i></a> -->
            </article> 
          </div>
          
        </section>
        <section class="layout-about" id="about">
          <div class="container">
             <article class="layout-about__content padding__y">
              <h2>ABOUT ME</h2>
              <p>I am a creative, orderly, analytical, self-taught and perfectionist person.</p>
              <p>My favorite hobbies is watch movies, talk with my wife, read articles about new update programming language and study new things about the programming and UI/UX.</p>
            </article>
          </div>
         

        </section>
          <section class="layout-development">
            <div class="cards container padding__y">
              <div class="card">
                <div class="card-container" :class="{fliped:flipedFront}">
                  <div class="card-front">
                    <!-- <img src="https://avatars0.githubusercontent.com/u/17136843?s=460&v=4" class="card-header" alt=""> -->
                    <article class="card-description">
                      <h1 class="monster-title">Front-end Developer</h1>
                      <p class="monster-description">I like to make structure of simple content, clean design and thoughtful interactions.</p>
                      <button class="button-link" @click="flipedFront = true">LEARN MORE</button>
                    </article>
                  </div>
                  <div class="card-back" >
                    <article class="card-description" @click="flipedFront = false">
                      <h2 class="monster-sub-title">Language, Frameworks and Library that I dominate</h2>
                      <p class="monster-description">HTML, CSS, SCSS, Bootstrap, Stylus, JavaScript, ReactJs, Redux and Vuejs.</p>
                  
                      <h2 class="monster-sub-title">Methodologies</h2>
                      <p class="monster-description">BEM, SMACSS, Git Flow and OOCSS</p>
                    </article>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-container" :class="{fliped:flipedDes}">
                  <div class="card-front">
                    <!-- <img src="https://avatars0.githubusercontent.com/u/17136843?s=460&v=4" class="card-header" alt=""> -->
                    <article class="card-description">
                      <h1 class="monster-title">Web Designer</h1>
                      <p class="monster-description">I love coding things from scratch, and I enjoy giving life to my web pages</p>
                      <button class="button-link" @click="flipedDes = !flipedDes">LEARN MORE</button>
                    </article>
                  </div>
                  <div class="card-back" @click="flipedDes = false">
                    <article class="card-description">
                      <h2 class="monster-sub-title">Things I enjoy designing:</h2>
                      <p class="monster-description">UI, Web and Apps</p>
                    
                      <h2 class="monster-sub-title">Design Tools</h2>
                      <p  class="monster-description">Adobe XD</p>
                    </article>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-container" :class="{fliped:flipedDev}">
                  <div class="card-front">
                    <!-- <img src="https://avatars0.githubusercontent.com/u/17136843?s=460&v=4" class="card-header" alt=""> -->
                    <article class="card-description">
                      <h1  class="monster-title">Software Developer</h1>
                      <p class="monster-description">I love learning from other areas, and I enjoy solving problems through technology.</p>
                      <button class="button-link" @click="flipedDev = !flipedDev">LEARN MORE</button>
                    </article>
                  </div>
                  <div class="card-back" @click="flipedDev = false">
                    <article class="card-description">
                      <h2 class="monster-sub-title">Language, Frameworks and Library that I dominate</h2>
                      <p  class="monster-description"> Twig, PHP and MySQL . </p>
                    </article>
                  </div>
                </div>
              </div>
            </div>

        </section>
        <section class="layout-skills">
          <div class="text-center padding__y">
            <h2>SKILLS</h2>
            <div class="cards-skills container">
                <div class="card-skill">
                  <img src="../assets/image/creative.svg" width="104px" alt="">
                  <p class="monster-title">Creative</p>
                </div>
                <div class="card-skill">
                    <img src="../assets/image/support.svg" width="104px" alt="">
                    <p class="monster-title">Teamwork</p>
                </div>
                <div class="card-skill">
                  <img src="../assets/image/decision.svg" width="104px" alt="">
                  <p class="monster-title">Proactive</p>
                </div>
                <div class="card-skill">
                  <img src="../assets/image/intellectual.svg" width="104px" alt="">
                  <p class="monster-title">Autodidact</p>
                </div>
            </div>
          </div> 
        </section>
        <!-- <section class="layout-portafolio" id="portafolio">
          <h2 class="text-center padding__y margin--none">PORTAFOLIO</h2>
          <div class="cards-portafolio container ">

            <div class="card-portafolio" data-name="Nahual">
                <img src="https://source.unsplash.com/random/400x402" alt="">
                
                <div class="card-portafolio__description" @click="goTodetail(1,'nahual','loco')">
                  <article class="card-content"> 
                    <h2 class="margin--none">Hola</h2>
                  </article>
                
              </div>
            </div>

             <div class="card-portafolio" data-name="Nahual">
                <img src="https://source.unsplash.com/random/400x402" alt="">
               <div class="card-portafolio__description">
                  <article class="card-content"> 
                    <h2 class="margin--none">Hola</h2>
                  </article>
              </div>
            </div>

            <div class="card-portafolio" data-name="Nahual">
              <img src="https://source.unsplash.com/random/400x402" alt="">
              <div class="card-portafolio__description">
                  <article class="card-content"> 
                    <h2 class="margin--none">Hola</h2>
                  </article>
              </div>               

            </div>

            <div class="card-portafolio" data-name="Nahual">
              <img src="https://source.unsplash.com/random/400x402" alt="">
              <div class="card-portafolio__description">
                  <article class="card-content"> 
                    <h2 class="margin--none">Hola</h2>
                  </article>
              </div>
            </div>

            <div class="card-portafolio" data-name="Nahual">
              <img src="https://source.unsplash.com/random/400x402" alt="">
              <div class="card-portafolio__description">
                  <article class="card-content"> 
                    <h2 class="margin--none">Hola</h2>
                  </article>
              </div>
            </div>

            <div class="card-portafolio" data-name="Nahual">
              <img src="https://source.unsplash.com/random/400x402" alt="">
              <div class="card-portafolio__description">
                  <article class="card-content"> 
                    <h2 class="margin--none">Hola</h2>
                  </article>
              </div>
            </div>

            <div class="card-portafolio" data-name="Nahual">
              <img src="https://source.unsplash.com/random/400x402" alt="">
              <div class="card-portafolio__description">
                  <article class="card-content"> 
                    <h2 class="margin--none">Hola</h2>
                  </article>
              </div>
            </div>

            <div class="card-portafolio" data-name="Nahual">
              <img src="https://source.unsplash.com/random/400x402" alt="">
              <div class="card-portafolio__description">
                  <article class="card-content"> 
                    <h2 class="margin--none">Hola</h2>
                  </article>
              </div>
            </div>
          </div>
        </section> -->
        <section class="layout-contact" id="contact">
          <h2 class="text-center padding__y">CONTACT ME</h2>
          <div class="contact-description padding__y">
            <form class="form" action="">
              <div class="form--group">
                <label>Name</label>
                <input class="form--input" type="text">
              </div>
              <div class="form--group">
                <label>Email</label>
                <input class="form--input" type="text">
              </div>
              <div class="form--group">
                <label for="">Message</label>
                 <textarea rows="4" cols="50" class="form--input"></textarea> 
              </div>
              <div class="d-flex justify-content-flex-end">
                <button class="button-primary">SEND</button>
              </div>
              
            </form>
            <img src="../assets/image/icon-contact.svg" class="layout-contact--img" alt="">
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
