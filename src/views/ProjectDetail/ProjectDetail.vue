<template>
  <div class="container-projectdetail">
    <Navbar />
    <NavTabs title="Project Detail" />
    <div class="detail-section">
      <div class="container-projectdetailcontent">
        <div v-html="body" class="markdown-content"></div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import marked from "marked";
import axios from "axios";
import Navbar from "@/components/Navbar/Navbar";
import NavTabs from "@/components/NavTabs/NavTabs";
import Footer from "@/components/Footer/Footer";

export default {
  name: "ProjectDetail",
  components: {
    Navbar,
    Footer,
    NavTabs,
  },
  props: {
    title: { type: String, default: "" },
  },
  data() {
    return {
      content: {},
      body: {},
      contentId: 0,
    };
  },
  async created() {
    this.contentId = this.$route.params.slug;

    const contentId = this.$route.params.slug;

    try {
      const response = await axios.get(
        `https://cms.finder.ac.id/projects/${contentId}`
      );

      console.log(response.data);
      this.content = response.data;
      this.body = marked(this.content.body);
    } catch (error) {
      this.error = error;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "ProjectDetail.scss";
</style>
