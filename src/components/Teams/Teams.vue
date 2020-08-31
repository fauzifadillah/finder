<template>
  <div class="container-teams">
    <section class="header-section mb-5">
      <div><h1>Teams</h1></div>
    </section>
    <section class="listteams-section">
      <ListCard title="Teams" />
      <div class="text-center py-5">
        Load More
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
