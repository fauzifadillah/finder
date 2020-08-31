<template>
  <div class="container-teams">
    <section class="header-section mb-5">
      <div><h1>Teams</h1></div>
    </section>
    <section class="listteams-section">
      <ListCard title="Teams" />
      <div class="text-center py-5">
        <button
          type="button"
          class="btn btn-light border border-dark pt-3 pb-2 px-5"
        >
          <h5 class="font-weight-bold">Load More</h5>
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import ListCard from "@/components/ListCard/ListCard";

export default {
  name: "Teams",
  components: {
    ListCard,
  },
};
</script>

<style lang="scss" scoped>
@import "Teams.scss";
</style>
