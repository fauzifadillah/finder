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
  <template v-else-if="title === 'Explainers'">
    <div class="col-12 pl-0" data-aos="fade-down">
      <h4 class="font-weight-bold">FINDER FOR PHYSICS</h4>
      <p>Research about education at a glance</p>
    </div>
    <div class="col-12 p-0">
      <div class="row mb-4">
        <div class="col-md-4 mb-3">
          <Card title="Explainers" />
        </div>
        <div class="col-md-4 mb-3">
          <Card title="Explainers" />
        </div>
        <div class="col-md-4 mb-3">
          <Card title="Explainers" />
        </div>
      </div>
    </div>
    <div class="col-12 pl-0 pt-4" data-aos="fade-down">
      <h4 class="font-weight-bold">FINDER FOR BIOMATERIALS</h4>
      <p>Research about education at a glance</p>
    </div>
    <div class="col-12 p-0">
      <div class="row mb-4 d-flex">
        <div
          class="col-md-4 mb-3"
          v-for="explainer in explainers"
          :key="explainer.id"
        >
          <!--  -->
          <div class="container-card">
            <div class="card-explainers" data-aos="fade-down">
              <div class="row hover-tb p-4">
                <div class="col-12 mb-5">
                  <h5>{{ explainer.title }}</h5>
                </div>
                <div class="col-12 mb-3">
                  <router-link
                    :to="{
                      path: '/researches/detail',
                      params: { ex: explainers },
                    }"
                  >
                    <a href>
                      <u>Learn more</u>
                    </a>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <!--  -->
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
  <template v-else-if="title === 'Services'">
    <div class="col-12 pl-0" data-aos="fade-down">
      <h4 class="font-weight-bold">RnD Services</h4>
      <p>Research about education at a glance</p>
    </div>
    <div class="col-12 mt-4 p-0">
      <Card title="Services" />
    </div>
    <div class="col-12 mt-2 p-0">
      <Card title="Services" />
    </div>
    <div class="col-12 mt-2 p-0">
      <Card title="Services" />
    </div>
    <div class="col-12 pl-0 mt-4" data-aos="fade-down">
      <h4 class="font-weight-bold">Analysis</h4>
      <p>Research about education at a glance</p>
    </div>
    <div class="col-12 mt-4 p-0">
      <Card title="Services" />
    </div>
    <div class="col-12 mt-2 p-0">
      <Card title="Services" />
    </div>
    <div class="col-12 mt-2 p-0">
      <Card title="Services" />
    </div>
    <div class="col-12 pl-0 mt-4" data-aos="fade-down">
      <h4 class="font-weight-bold">Journal Services</h4>
      <p>Research about education at a glance</p>
    </div>
    <div class="col-12 mt-4 p-0">
      <Card title="Services" />
    </div>
    <div class="col-12 mt-2 p-0">
      <Card title="Services" />
    </div>
    <div class="col-12 mt-2 p-0">
      <Card title="Services" />
    </div>
  </template>
</template>

<script>
import Card from "../Card/Card";
import axios from "axios";
export default {
  name: "ListCard",
  components: {
    Card,
  },
  props: ["title"],
  data() {
    return {
      explainers: [],
      nav: [],
      error: null,
    };
  },
  async beforeMount() {
    try {
      const response = await axios.get(
        "https://cms.finder.ac.id/research-explainers"
      );
      this.explainers = response.data;
      // const response_nav = await axios.get(
      //   "https://cms.finder.ac.id/navigation-menus"
      // );
      // this.nav = response_nav.data;
      // console.log(response_nav);
      console.log(this.explainers[0].title);
    } catch (error) {
      this.error = error;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "ListCard.scss";
@import "../Card/Card.scss";
</style>
