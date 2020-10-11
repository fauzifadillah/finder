<template>
  <div class="container-publications">
    <Navbar />

    <section class="header-section mb-5">
      <div data-aos="zoom-out"><h1>Publications</h1></div>
      <div data-aos="zoom-out"><p>This is space for publications hero</p></div>
    </section>
    <section class="listpaper-section">
      <div data-aos="fade-down">
        <ListCard title="Publications" />
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
  name: "Publications",
  components: {
    ListCard,
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import "Publications.scss";
</style>
