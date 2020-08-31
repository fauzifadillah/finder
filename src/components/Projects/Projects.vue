<template>
  <div class="container-projects">
    <section class="header-section mb-5">
      <div><h1>Projects</h1></div>
    </section>
    <section class="listprojects-section">
      <ListCard title="Projects" />
      <div class="text-center py-5">
        Load More
      </div>
    </section>
  </div>
</template>

<script>
import ListCard from "@/components/ListCard/ListCard";

export default {
  name: "Projects",
  components: {
    ListCard,
  },
};
</script>

<style lang="scss" scoped>
@import "Projects.scss";
</style>
