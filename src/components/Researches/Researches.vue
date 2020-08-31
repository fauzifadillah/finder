<template>
  <div class="container-researches">
    <section class="header-section mb-5">
      <div><h1>Research Explainers</h1></div>
    </section>
    <section class="listresearches-section">
      <ListCard title="Researches" />
      <div class="text-center py-5">
        Load More
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
