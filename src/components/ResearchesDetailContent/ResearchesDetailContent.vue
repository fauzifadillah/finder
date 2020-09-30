<template>
  <div class="container-researchesdetailcontent">
    <h1>{{ content.title }}</h1>
    <div v-html="body" class="pt-3"></div>
    <!-- <div class="row mx-0 mb-3">
      <img
        class="mx-auto researches-image"
        src="../../assets/explainersdetail.png"
      />
    </div> -->
  </div>
</template>

<script>
import marked from "marked";
import axios from "axios";
export default {
  name: "ResearchesDetailContent",
  data() {
    return {
      content: {},
      body: {},
      contentId: 0,
    };
  },
  async created() {
    this.contentId = this.$route.params.id;

    const contentId = this.$route.params.id;

    try {
      const response = await axios.get(
        `https://cms.finder.ac.id/research-explainers/${contentId}`
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

<style lang="scss">
@import "ResearchesDetailContent.scss";
</style>
