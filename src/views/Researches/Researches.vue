<template>
  <div class="container-researches">
    <Navbar />
    <NavTabs title="Researches" />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar";
import NavTabs from "@/components/NavTabs/NavTabs";
import Footer from "@/components/Footer/Footer";

export default {
  name: "Researches",
  components: {
    Navbar,
    Footer,
    NavTabs,
  },
  props: ["title"],
};
</script>

<style lang="scss" scoped>
@import "Researches.scss";
</style>
