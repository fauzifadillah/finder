<template>
  <div class="container-news">
    <Navbar />

    <section class="header-section mb-5">
      <div><h1>News</h1></div>
      <div><p>This is space for news hero</p></div>
    </section>
    <section class="listnews-section">
      <ListCard title="News" />
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
import ListCard from "@/components/ListCard/ListCard";

export default {
  name: "News",
  components: {
    ListCard,
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import "News.scss";
</style>
