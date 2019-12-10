<template>
  <section class="layout-development padding-y--lg" id="hard-skills">
    <div class="container">
      <div class="padding-top--xl">
        <h2 class="title-underline">Hard Skills</h2>
      </div>
      <div class="cards padding-y">
        <div class="card">
          <div class="card-container" :class="{fliped:flipedFront}">
            <div class="card-front">
              <article class="card-description">
                <h1 class="monster-title">UI Developer</h1>
                <p
                  class="monster-description"
                >I like to make structure of simple content, clean design and thoughtful interactions.</p>
                <button class="button-link" @click="flipedFront = true">LEARN MORE</button>
              </article>
            </div>
            <div class="card-back">
              <article class="card-description" @click="flipedFront = false">
                <h2 class="monster-sub-title">Language, Frameworks and Library that I dominate</h2>
                <p
                  class="monster-description"
                >HTML, CSS, SCSS, Bootstrap, Stylus, JavaScript, ReactJs, Redux and Vuejs.</p>

                <h2 class="monster-sub-title">Methodologies</h2>
                <p class="monster-description">BEM, SMACSS, Git Flow and OOCSS</p>
              </article>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-container" :class="{fliped:flipedDes}">
            <div class="card-front">
              <article class="card-description">
                <h1 class="monster-title">Web Designer</h1>
                <p
                  class="monster-description"
                >I love coding things from scratch, and I enjoy giving life to my web pages</p>
                <button class="button-link" @click="flipedDes = !flipedDes">LEARN MORE</button>
              </article>
            </div>
            <div class="card-back" @click="flipedDes = false">
              <article class="card-description">
                <h2 class="monster-sub-title">Things I enjoy designing:</h2>
                <p class="monster-description">UI, Web and Apps</p>

                <h2 class="monster-sub-title">Design Tools</h2>
                <p class="monster-description">Adobe XD</p>
              </article>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-container" :class="{fliped:flipedDev}">
            <div class="card-front">
              <article class="card-description">
                <h1 class="monster-title">Software Developer</h1>
                <p
                  class="monster-description"
                >I love learning from other areas, and I enjoy solving problems through technology.</p>
                <button class="button-link" @click="flipedDev = !flipedDev">LEARN MORE</button>
              </article>
            </div>
            <div class="card-back" @click="flipedDev = false">
              <article class="card-description">
                <h2 class="monster-sub-title">Language, Frameworks and Library that I dominate</h2>
                <p class="monster-description">Twig, PHP and MySQL .</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "skills",
  data: function() {
    return {
      flipedDev: false,
      flipedDes: false,
      flipedFront: false
    };
  }
};
</script>