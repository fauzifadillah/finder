<template>
  <div class="container-contact">
    <Navbar />
    <section class="first-section">
      <div class="row">
        <div class="col-md">
          <h1>Ask us anything.</h1>
          <br />
          <h3>Headquarters #1</h3>
          <p>
            Contact person 1 <br />
            Address <br />
            +62 859 4722 4853
          </p>
        </div>
        <div class="col-md-auto">
          <Location />
          <br />
        </div>
      </div>
      <div class="row">
        <div class="col-md">
          <u>Looking for contact form?</u>
        </div>
        <div class="col-md-auto">
          <img src="../../assets/logo-aneh.png" />
        </div>
      </div>
    </section>
    <section class="second-section">
      <img class="img-section" src="../../assets/image-1.png" />
    </section>
    <section class="third-section">
      <div>
        <h2>Let us know how we can help you</h2>
      </div>
      <div class="row">
        <div class="col">
          First name
        </div>
        <div class="col">
          Last name
        </div>
      </div>
      <div class="row">
        <div class="col">
          First name
        </div>
        <div class="col">
          Last name
        </div>
      </div>
      <div class="row">
        <div class="col">
          First name
        </div>
        <div class="col">
          Last name
        </div>
      </div>
      <div>
        Your message
      </div>
      <div>
        Button
        <!-- Button -->
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Location from "@/components/Location/Location";

export default {
  name: "Contact",
  components: {
    Navbar,
    Footer,
    Location,
  },
};
</script>

<style lang="scss" scoped>
@import "Contact.scss";
</style>
