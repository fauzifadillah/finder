<template>
  <div class="container-newsdetail">
    <Navbar />
    <NavTabs title="News Detail" />
    <div class="detail-section">
      <NewsDetailContent />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar";
import NavTabs from "@/components/NavTabs/NavTabs";
import Footer from "@/components/Footer/Footer";
import NewsDetailContent from "@/components/NewsDetailContent/NewsDetailContent";

export default {
  name: "NewsDetail",
  components: {
    Navbar,
    Footer,
    NavTabs,
    NewsDetailContent,
  },
  props: ["title"],
};
</script>

<style lang="scss" scoped>
@import "NewsDetail.scss";
</style>
