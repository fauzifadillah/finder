<template>
  <div class="container-projectdetail">
    <Navbar />
    <div class="container-header-red">
      <div class="row mx-0">
        <div class="col-12 px-0">
          <h2
            data-aos="fade-out"
            data-aos-duration="3000"
            class="text-white mb-3"
          >
            {{ content.topic }}
          </h2>
          <h1
            data-aos="fade-out"
            data-aos-duration="3000"
            class="text-white mb-5 pb-5"
          >
            {{ content.title }}
          </h1>
        </div>
      </div>
    </div>
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
import Footer from "@/components/Footer/Footer";

export default {
  name: "ProjectDetail",
  components: {
    Navbar,
    Footer,
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
