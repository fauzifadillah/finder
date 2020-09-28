<template>
  <div class="container-researchesdetailcontent">
    <h1>{{content.title}}</h1>
    <p class="pt-3">{{content.body}}</p>
    <div class="row mx-0 mb-3">
      <img
        class="mx-auto researches-image"
        src="../../assets/explainersdetail.png"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ResearchesDetailContent",
  data() {
    return {
      content: {},
      contentId: 0,
    };
  },
  async created() {
    this.contentId = this.$route.params.id;

    const contentId = this.$route.params.id;

    try {
      const response = await axios
        .get(`https://cms.finder.ac.id/research-explainers/${contentId}`)

      console.log(response.data);
      this.content = response.data;

    } catch (error) {
      this.error = error;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "ResearchesDetailContent.scss";
</style>
