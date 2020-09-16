<template>
  <div class="container-home" v-for="home in homes" :key="home.id">
    <Navbar />

    <section class="row first-section">
      <div class="row align-items-center">
        <div class="col-md-12">
          <h1>
            <span ref="h1" class="hidetext">{{ home.Hero }}</span>
          </h1>
          <h3 data-aos="fade-in" data-aos-duration="3000">
            {{ home.Tagline }}
          </h3>
        </div>
      </div>
    </section>

    <section class="second-section">
      <div class="row">
        <div class="col-md-4"></div>
        <div
          class="col-auto ml-md-auto p-0"
          data-aos="zoom-in-up"
          data-aos-duration="2500"
        >
          <img
            class="img-section"
            v-bind:src="'http://188.166.246.154' + home.Image_1[0].url"
          />
        </div>
      </div>
    </section>

    <section class="row third-section">
      <div class="row">
        <div class="col-md-6">
          <h2 class="pr-4" data-aos="fade-right" data-aos-duration="2000">
            {{ home.Anchor_1_title }}
          </h2>
          <img src="../../assets/logo-aneh.png" />
        </div>
        <div class="col-md-6 pl-4" data-aos="zoom-up" data-aos-duration="2500">
          <h5>{{ home.Anchor_1_desc }}</h5>
        </div>
      </div>
    </section>

    <section class="fourth-section">
      <div class="row">
        <div
          class="col-auto mr-md-auto p-0"
          data-aos="fade-right"
          data-aos-duration="2500"
        >
          <img
            class="img-section"
            v-bind:src="'http://188.166.246.154' + home.Image_2[0].url"
          />
        </div>
        <div class="col-md-4"></div>
      </div>
    </section>

    <section class="fifth-section">
      <div class="row">
        <h2 class="col-12 p-0" data-aos="fade-out" data-aos-duration="2500">
          {{ home.Anchor_2_title }}
        </h2>
        <h4 class="m-5" data-aos="fade-in" data-aos-duration="3000">
          {{ home.Anchor_2_desc }}
        </h4>
        <div class="col-12 p-0">
          <img src="../../assets/logo-aneh.png" />
        </div>
      </div>
    </section>

    <section class="sixth-section">
      <div class="row">
        <div class="col-md-4"></div>
        <div
          class="col-md-8 ml-md-auto p-0"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <img
            class="img-section"
            v-bind:src="'http://188.166.246.154' + home.Image_3[0].url"
          />
        </div>
      </div>
    </section>

    <section class="seventh-section">
      <div class="row">
        <h2 data-aos="fade-in" data-aos-duration="3000">
          {{ home.Anchor_3_title }}
        </h2>
      </div>
    </section>

    <section class="eighth-section">
      <img
        class="img-section"
        v-bind:src="'http://188.166.246.154' + home.Image_4[0].url"
      />
    </section>

    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
// import VueAos from 'vue-aos'
import axios from "axios";
import { TimelineMax, Power4 } from "gsap";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
    // VueAos
  },
  data() {
    return {
      homes: [],
      nav: [],
      error: null,
    };
  },
  updated() {
    // GSAP Initialization
    console.log(this.$refs);

    const tl = new TimelineMax({});
    tl.staggerFrom(
      this.$refs.h1,
      2.5,
      { y: "100%", ease: Power4.easeOut },
      1.15
    );
    tl.play();
  },
  async mounted() {
    try {
      const response = await axios.get("http://188.166.246.154/homes");
      this.homes = response.data;
      const response_nav = await axios.get(
        "http://188.166.246.154/navigation-menus"
      );
      this.nav = response_nav.data;
      console.log(response_nav);
    } catch (error) {
      this.error = error;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "Home.scss";
</style>
