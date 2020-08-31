<template>
  <div class="container-contact">
    <Navbar />
    <section class="first-section">
      <div class="row">
        <div class="col-md">
          <h1>Ask us anything.</h1>
          <br />
          <h3>Headquarters #1</h3>
          <h5 class="mt-4">
            Contact person 1 <br />
            Address <br />
            +62 859 4722 4853
          </h5>
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
        <h2 class="mb-5">Let us know how we can help you</h2>
      </div>
      <ContactUs/>
    </section>
    <Footer />
  </div>
</template>

<script>
import ContactUs from "@/components/ContactUs/ContactUs";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Location from "@/components/Location/Location";

export default {
  name: "Contact",
  components: {
    ContactUs,
    Navbar,
    Footer,
    Location,
  },
};
</script>

<style lang="scss" scoped>
@import "Contact.scss";
</style>
