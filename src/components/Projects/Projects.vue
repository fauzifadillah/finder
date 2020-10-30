<template>
  <div class="container-projects">
    <section class="header-section mb-5">
      <div data-aos="zoom-out"><h1>Projects</h1></div>
    </section>
    <section class="listprojects-section">
      <ListCard title="Projects" />
      <div class="text-center py-5">
        <!-- <button
          type="button"
          class="btn btn-light border border-dark pt-2 px-5"
        >
          <h5>Load More</h5>
        </button> -->
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
