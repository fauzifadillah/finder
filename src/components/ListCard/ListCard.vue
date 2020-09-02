<template>
  <template v-if="title === 'News'">
    <div class="row mb-4">
      <div class="col-md-4">
        <Card title="News" />
      </div>
      <div class="col-md-4">
        <Card title="News" />
      </div>
      <div class="col-md-4">
        <Card title="News" />
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-md-4">
        <Card title="News" />
      </div>
      <div class="col-md-4">
        <Card title="News" />
      </div>
      <div class="col-md-4">
        <Card title="News" />
      </div>
    </div>
  </template>
  <template v-else-if="title === 'Researches'">
    <div class="col-12 pl-0" data-aos="fade-down">
      <h4 class="font-weight-bold">FINDER FOR PHYSICS</h4>
      <p>Research about education at a glance</p>
    </div>
    <div class="col-12 p-0">
      <div class="row mb-4">
        <div class="col-md-4 mb-3">
          <Card title="Researches" />
        </div>
        <div class="col-md-4 mb-3">
          <Card title="Researches" />
        </div>
        <div class="col-md-4 mb-3">
          <Card title="Researches" />
        </div>
      </div>
    </div>
    <div class="col-12 pl-0 pt-4" data-aos="fade-down">
      <h4 class="font-weight-bold">FINDER FOR BIOMATERIALS</h4>
      <p>Research about education at a glance</p>
    </div>
    <div class="col-12 p-0">
      <div class="row mb-4 d-flex">
        <div class="col-md-4 mb-3">
          <Card title="Researches" />
        </div>
        <div class="col-md-4 mb-3">
          <Card title="Researches" />
        </div>
        <div class="col-md-4 mb-3">
          <Card title="Researches" />
        </div>
      </div>
    </div>
  </template>
  <template v-else-if="title === 'Projects'">
    <div class="row mb-4">
      <div class="col-md-6 pr-5">
        <Card title="Projects" />
        <Card title="Projects" />
      </div>
      <div class="col-md-6 pl-5">
        <Card title="Projects" />
        <Card title="Projects" />
      </div>
    </div>
  </template>
  <template v-else-if="title === 'Teams'">
    <div class="row mb-4">
      <div class="col-md-6 pr-5">
        <Card title="Teams" />
        <Card title="Teams" />
      </div>
      <div class="col-md-6 pl-5">
        <Card title="Teams" />
        <Card title="Teams" />
      </div>
    </div>
  </template>
</template>

<script>
import Card from "../Card/Card";

export default {
  name: "ListCard",
  components: {
    Card,
  },
  props: ["title"],
};
</script>

<style lang="scss" scoped>
@import "ListCard.scss";
</style>
