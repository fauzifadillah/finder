<template>
  <div class="container-researchesdetail">
    <Navbar />
    <NavTabs title="Researches Detail" />
    <div class="detail-section">
      <ResearchesDetailContent />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar";
import NavTabs from "@/components/NavTabs/NavTabs";
import Footer from "@/components/Footer/Footer";
import ResearchesDetailContent from "@/components/ResearchesDetailContent/ResearchesDetailContent";

export default {
  name: "ResearchesDetail",
  components: {
    Navbar,
    Footer,
    NavTabs,
    ResearchesDetailContent,
  },
  props: ["title"],
};
</script>

<style lang="scss" scoped>
@import "ResearchesDetail.scss";
</style>
