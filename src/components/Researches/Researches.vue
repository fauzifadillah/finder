<template>
  <div class="container-researches">
    <section class="header-section">
      <div data-aos="zoom-out"><h1>Research Explainers</h1></div>
    </section>
    <section class="listresearches-section">
      <div class="row mx-0"><ListCard title="Researches" /></div>
      <div class="text-center py-5">
        <button
          type="button"
          class="btn btn-light border border-dark pt-3 pb-2 px-5"
        >
          <h5 class="font-weight-bold">Load More</h5>
        </button>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import ListCard from "@/components/ListCard/ListCard";

export default {
  name: "Researches",
  components: {
    ListCard,
  },
};
</script>

<style lang="scss" scoped>
@import "Researches.scss";
</style>
