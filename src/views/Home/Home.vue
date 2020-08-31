<template>
  <div class="container-home">
    <Navbar />

    <section class="row first-section">
      <div class="row align-items-center">
        <div class="col-md-12">
          <h1>Unity in Dispersity</h1>
          <h3>There is always something new</h3>
        </div>
      </div>
    </section>

    <section class="second-section">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-auto ml-md-auto p-0">
          <img class="img-section" src="../../assets/image-1.png" />
        </div>
      </div>
    </section>

    <section class="row third-section">
      <div class="row">
        <div class="col-md-6">
          <h1>
            Strategic design and engineering for global leading brands
          </h1>
          <img src="../../assets/logo-aneh.png" />
        </div>
        <div class="col-md-6">
          <h3>
            Menjelaskan what is finder u CoE dan sekilas tentang sejarahnya. (At
            a glance).
          </h3>
          <h3>
            Menjelaskan what is finder u CoE dan sekilas tentang sejarahnya. (At
            a glance).
          </h3>
          <h3>
            Menjelaskan what is finder u CoE dan sekilas tentang sejarahnya. (At
            a glance).
          </h3>
        </div>
      </div>
    </section>

    <section class="fourth-section">
      <div class="row">
        <div class="col-auto mr-md-auto p-0">
          <img class="img-section" src="../../assets/image-1.png" />
        </div>
        <div class="col-md-4"></div>
      </div>
    </section>

    <section class="fifth-section">
      <div class="row">
        <h1>Intro Storyline</h1>
        <h2 class="m-5">
          Menjelaskan what is finder u CoE dan sekilas tentang sejarah sebelum
          Finder. (Timeline).
        </h2>
        <img src="../../assets/logo-aneh.png" />
      </div>
    </section>

    <section class="sixth-section">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-8 ml-md-auto p-0">
          <img class="img-section" src="../../assets/introduction.png" />
        </div>
      </div>
    </section>

    <section class="seventh-section">
      <div class="row">
        <h1>
          Our ideals remain the same – our inspiration is always nanotechnology.
        </h1>
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

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import "Home.scss";
</style>
