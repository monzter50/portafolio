<template>
  <section class="layout-development padding-y--lg" id="portafolio">
    <div class="container">
      <h2 class="title-underline">Projects</h2>
      <div class="cards-portafolio-default">
        <a class="card-portafolio-default" target="_blank" href="https://www.corder.band/">
          <img :src="coderImg" alt />

          <div class="card-portafolio__description" >
            <article class="card-content">
              <h2 class="margin--none">Corder Band</h2>
            </article>
          </div>
        </a>
        <a class="card-portafolio-default" target="_blank" href="https://kukuarestaurantpuntacana.com/">
          <img :src="kukuaImg" alt />
          <div class="card-portafolio__description">
            <article class="card-content">
              <h2 class="margin--none">Xtabay</h2>
            </article>
          </div>
        </a>
        <a class="card-portafolio-default" target="_blank" href="https://on-prana.com/">
          <img :src="onpranaImg" alt />
          <div class="card-portafolio__description">
            <article class="card-content">
              <h2 class="margin--none">Xtabay</h2>
            </article>
          </div>
        </a>
        <a class="card-portafolio-default" target="_blank" href="https://xtabaymedicinaestetica.com/">
          <img :src="xtabayImg" alt />
          <div class="card-portafolio__description">
            <article class="card-content">
              <h2 class="margin--none">Xtabay</h2>
            </article>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import kukuaImg from '../assets/image/kukua.jpg'
import onpranaImg from '../assets/image/onprana.png'
import coderImg from '../assets/image/corderband.jpg'
import xtabayImg from '../assets/image/xtabay.jpg'
export default {
  name: "portafolio",
  data: function () {
    return {
      kukuaImg: kukuaImg,
      onpranaImg: onpranaImg,
      coderImg: coderImg,
      xtabayImg:xtabayImg
    }
  },
};
</script>