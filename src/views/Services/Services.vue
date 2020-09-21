<template>
  <div class="container-services">
    <Navbar />

    <section class="header-section mb-5">
      <div data-aos="zoom-out"><h1>Services</h1></div>
      <div data-aos="zoom-out"><p>Ieu kudu aya tulisan ameh konsisten</p></div>
    </section>
    <section class="listcard-section">
      <div data-aos="fade-down">
        <ListCard title="Services" />
        <div class="text-center py-5">
          <button
            type="button"
            class="btn btn-light border border-dark pt-3 pb-2 px-5"
          >
            <h5 class="font-weight-bold">Load More</h5>
          </button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ListCard from "@/components/ListCard/ListCard";

export default {
  name: "Services",
  components: {
    ListCard,
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import "Services.scss";
</style>
