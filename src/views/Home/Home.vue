<template>
  <div class="container-home" v-for="home in homes" :key="homes.id">
    <Navbar />

    <section class="row first-section">
      <div class="row align-items-center">
        <div class="col-md-12" data-aos="fade-right" data-aos-duration="2500">
          <h1>{{ home.Hero }}</h1>
          <h3 data-aos="fade-up" data-aos-duration="2500">{{ home.Tagline}}</h3>
        </div>
      </div>
    </section>

    <section class="second-section">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-auto ml-md-auto p-0" data-aos="zoom-in-up" data-aos-duration="2500">
          <img class="img-section" src="../../assets/image-1.png" />
        </div>
      </div>
    </section>

    <section class="row third-section">
      <div class="row">
        <div class="col-md-6">
          <h2
            class="pr-4"
            data-aos="fade-right"
            data-aos-duration="2000"
          >Strategic design and engineering for global leading brands</h2>
          <img src="../../assets/logo-aneh.png" />
        </div>
        <div class="col-md-6 pl-4" data-aos="zoom-up" data-aos-duration="2500">
          <h5>
            Menjelaskan what is finder u CoE dan sekilas tentang sejarahnya. (At
            a glance).
          </h5>
          <h5>
            Menjelaskan what is finder u CoE dan sekilas tentang sejarahnya. (At
            a glance).
          </h5>
          <h5>
            Menjelaskan what is finder u CoE dan sekilas tentang sejarahnya. (At
            a glance).
          </h5>
        </div>
      </div>
    </section>

    <section class="fourth-section">
      <div class="row">
        <div class="col-auto mr-md-auto p-0" data-aos="fade-right" data-aos-duration="2500">
          <img class="img-section" src="../../assets/image-1.png" />
        </div>
        <div class="col-md-4"></div>
      </div>
    </section>

    <section class="fifth-section">
      <div class="row">
        <h2 class="col-12 p-0" data-aos="fade-out" data-aos-duration="2500">Intro Storyline</h2>
        <h4 class="m-5" data-aos="fade-in" data-aos-duration="3000">
          Menjelaskan what is finder u CoE dan sekilas tentang sejarah sebelum
          Finder. (Timeline).
        </h4>
        <div class="col-12 p-0">
          <img src="../../assets/logo-aneh.png" />
        </div>
      </div>
    </section>

    <section class="sixth-section">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-8 ml-md-auto p-0" data-aos="fade-up" data-aos-duration="1500">
          <img class="img-section" src="../../assets/introduction.png" />
        </div>
      </div>
    </section>

    <section class="seventh-section">
      <div class="row">
        <h2
          data-aos="fade-in"
          data-aos-duration="3000"
        >Our ideals remain the same – our inspiration is always nanotechnology.</h2>
      </div>
    </section>

    <section class="eighth-section">
      <img class="img-section" src="../../assets/image-1.png" />
    </section>

    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
// import VueAos from 'vue-aos'
import axios from "axios";
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
      error: null,
    };
  },
  async mounted() {
    try {
      const response = await axios.get("http://188.166.246.154/homes");
      this.homes = response.data;
      console.log(response);
    } catch (error) {
      this.error = error;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "Home.scss";
</style>
