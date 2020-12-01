<template>
  <div class="container-explainers">
    <section class="header-section">
      <div data-aos="zoom-in" data-aos-duration="1000">
        <h1>Research & Development</h1>
      </div>
    </section>
    <section class="listexplainers-section">
      <div class="row mx-0">
        <ListCard title="Rnds" />
      </div>
      <div class="text-center py-5">
        <!-- <button
          type="button"
          class="btn btn-light border border-dark pt-3 pb-2 px-5"
        >
          <h5 class="font-weight-bold">Load More</h5>
        </button> -->
      </div>
    </section>
  </div>
</template>

<script>
import ListCard from "@/components/ListCard/ListCard";

export default {
  name: "Rnds",
  components: {
    ListCard,
  },
};
</script>

<style lang="scss" scoped>
@import "Rnds.scss";
</style>
