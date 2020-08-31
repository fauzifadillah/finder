<template>
  <div>
    2020
    <hr />
  </div>
  <div>
    <Paper class="mb-5" />
  </div>
  <div>
    2019
    <hr />
  </div>
  <div>
    <Paper class="mb-5" />
  </div>
</template>

<script>
import Paper from "../Paper/Paper";

export default {
  name: "ListPaper",
  components: {
    Paper,
  },
};
</script>

<style lang="scss" scoped>
@import "ListPaper.scss";
</style>
