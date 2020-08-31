<template>
  <div class="container-publications">
    <Navbar />

    <section class="header-section mb-5">
      <div><h1>Publications</h1></div>
      <div><p>This is space for publications hero</p></div>
    </section>
    <section class="listpaper-section">
      <ListPaper />
      <div class="text-center py-5">
        Load More
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ListPaper from "@/components/ListPaper/ListPaper";

export default {
  name: "Publications",
  components: {
    ListPaper,
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import "Publications.scss";
</style>
