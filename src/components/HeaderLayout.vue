<template>
  <section class="hero" id="home">
    <div class="monster container">
      <article class="layout-about__content padding-y">
        <vue-typed-js
          :strings="['UI Developer', 'Web Designer', 'Teacher','Software Developer']"
          :loop="true"
        >
          <h1 class="margin--none monster-title">
            Hi, I'm a
            <span class="text--primary monster-subtitle">
              <span class="typing"></span>
            </span>
          </h1>
        </vue-typed-js>
        <p>I am a creative, orderly, analytical, self-taught, passionate about teaching and learning person. My favorite hobbies is watch movies, talk with my wife, run, read articles about new update programming language and study new things.</p>
        <p>Community Lead of the Sloth Tech looking for growth in the southeast area in Technology.</p>
        <p>
          Sigueme en:
          <a
            href="https://github.com/monzter50"
            target="_blank"
            class="margin-left text--second"
          >
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
          <a href="https://codepen.io/monzter50" target="_blank" class="margin-left text--second">
            <font-awesome-icon :icon="['fab', 'codepen']" />
          </a>
          <a
            href="https://www.linkedin.com/in/jose-gonzalez-b32228138/"
            class="margin-left text--second"
            target="_blank"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
          <a
            href="https://twitter.com/monster_glez"
            target="_blank"
            class="margin-left text--second"
          >
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
          <a
            href="https://www.instagram.com/monster_glez/"
            target="_blank"
            class="margin-left text--second"
          >
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
        </p>
      </article>
      <!-- <img src="../assets/image/profile.svg" class="monster-dev" alt="Monster Developer" /> -->
    </div>
  </section>
</template>

<script>
export default {
  name: "header"
};
</script>