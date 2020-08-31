<template>
  <div class="container-guides">
    <Navbar />
    <NavTabs />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar";
import NavTabs from "@/components/NavTabs/NavTabs";
import Footer from "@/components/Footer/Footer";

export default {
  name: "Guides",
  components: {
    Navbar,
    Footer,
    NavTabs,
  },
};
</script>

<style lang="scss" scoped>
@import "Guides.scss";
</style>
