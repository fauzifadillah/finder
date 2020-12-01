<template>
  <div class="container-researches">
    <Navbar />
    <NavTabs title="Researchers" />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar";
import NavTabs from "@/components/NavTabs/NavTabs";
import Footer from "@/components/Footer/Footer";

export default {
  name: "Researchers",
  components: {
    Navbar,
    Footer,
    NavTabs,
  },
  props: ["title"],
};
</script>

<style lang="scss" scoped>
@import "Researchers.scss";
</style>
