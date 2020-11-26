<template>
  <div class="container-home" v-for="home in homes" :key="home.id">
    <Navbar />

    <!-- <div class="overlay" v-if="!isHidden" v-on:click="isHidden = true">
      <div class="banner d-flex justify-content-center">
        <div class="banner-container m-auto">
          <div class="banner-close text-right">&times;</div>
          <a href="https://www.jptranstech.or.id/finder2020">
          <img
            ref="banner-image"
            class="banner-container-img m-auto rounded"
            src="https://www.cms.finder.ac.id/uploads/banner_Fi_Nder_conference_01_68fd5d7572.jpg"
          />
          </a>
        </div>
      </div>
    </div> -->

    <section class="row first-section">
      <div class="row align-items-center">
        <div class="col-md-12">
          <h1>
            <span ref="hero" class="hidetext">{{ home.Hero }}</span>
          </h1>
          <h3 ref="tagline" data-aos="fade-in" data-aos-duration="3000">
            {{ home.Tagline }}
          </h3>
        </div>
      </div>
    </section>

    <section class="second-section">
      <div class="row">
        <div class="col-md-4"></div>
        <div
          ref="box1"
          class="col-auto ml-md-auto p-0"
          data-aos="zoom-in-up"
          data-aos-duration="2500"
        >
          <img
            ref="image1"
            class="img-section"
            v-bind:src="'https://cms.finder.ac.id' + home.Image_1[0].formats.medium.url"
          />
        </div>
      </div>
    </section>

    <section class="row third-section">
      <div class="row">
        <div class="col-md-6">
          <h2 class="pr-4">
            <span ref="anchor1" class="hidetext">{{
              home.Anchor_1_title
            }}</span>
          </h2>
          
        </div>
        <div class="col-md-6 pl-4" data-aos="zoom-up" data-aos-duration="2500">
          <h6>{{ home.Anchor_1_desc }}</h6>
        </div>
      </div>
      <div class="row">
        
        <div class="col-md-6">
          <h2 class="pr-4">
            <span ref="anchor1" class="hidetext">{{
              home.anchor_1_1_title
            }}</span>
          </h2>
          <img src="../../assets/logo-aneh.png" />
        </div>
        <div class="col-md-6 pl-4 mt-3" data-aos="zoom-up" data-aos-duration="2500">
          <h6>{{ home.anchor_1_1_desc }}</h6>
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
            v-bind:src="'https://cms.finder.ac.id' + home.Image_2[0].formats.medium.url"
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
        <h6 id="about-us" class="m-5" style="line-height: 1.6;" data-aos="fade-in" data-aos-duration="3000">
          {{ home.Anchor_2_desc }}
        </h6>
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
            v-bind:src="'https://cms.finder.ac.id' + home.Image_3[0].formats.medium.url"
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
        v-bind:src="'https://cms.finder.ac.id' + home.Image_4[0].formats.medium.url"
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
import { TimelineMax, Power3, Power4, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
      isHidden: false
    };
  },
  methods: {
    on: function () {
      // this.display='none';
    }
  },
  updated() {
    // GSAP Initialization
    console.log(this.$refs);

    const tl = new TimelineMax();
    tl.staggerFrom(
      this.$refs.hero,
      3.5,
      {
        y: "100%",
        ease: Power4.easeInOut,
      },
      1.15
    );
    tl.fromTo(
      this.$refs.anchor1,
      3.5,
      {
        y: "100%",
        ease: Power3.easeInOut,
      },
      { y: "10%", ease: Power4.easeInOut },
      "-=2.5"
    );
    tl.from(this.$refs.tagline, 2.5, { y: "-15%", ease: Power4.fadeIn }, 0.5);
    // gsap.to(this.$refs.box1, {
    //   duration: 1,
    //   y: "2%",
    //   x: "0%",
    //   yoyo: true,
    //   repeatDelay: 3.5,
    //   stagger: 0.5,
    // });
    // gsap.from(this.$refs.image1, {
    //   duration: 1,
    //   opacity: 1,
    //   yoyo: true,
    //   repeatDelay: 3.5,
    //   stagger: 0.5,
    // });
    tl.play();
  },
  async mounted() {
    try {
      const response = await axios.get("https://cms.finder.ac.id/homes");
      this.homes = response.data;
      const response_nav = await axios.get(
        "https://cms.finder.ac.id/navigation-menus"
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
