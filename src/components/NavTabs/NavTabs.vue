<template>
  <div class="container-navtabs mb-5">
    <template v-if="title === 'Researches'">
      <div class="container-header">
        <div class="row">
          <div class="col-lg-8 pl-0">
            <h2
              data-aos="fade-out"
              data-aos-duration="3000"
              class="text-white mb-5"
            >
              Using data-driven scientific analysis, we strive to better
              understand how functional in the powder. Here we provide a guide
              to core research
            </h2>
          </div>
          <div class="col-lg-4"></div>
        </div>
        <div class="row" data-aos="fade-down" data-aos-duration="1000">
          <ul class="nav nav-pills" id="pills-tab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
                >EXPLAINERS</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="pills-profile-tab"
                data-toggle="pill"
                href="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
                >PROJECTS</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="pills-contact-tab"
                data-toggle="pill"
                href="#pills-contact"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
                >TEAMS</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="row container-content">
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <Explainers />
          </div>
          <div
            class="tab-pane"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <Projects />
          </div>
          <div
            class="tab-pane"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <Teams />
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="container-header-red">
        <div class="row">
          <div class="col-12 px-0">
            <!-- News Detail -->
            <template v-if="title === 'News Detail'">
              <h2
                data-aos="fade-out"
                data-aos-duration="3000"
                class="text-white mb-0"
              >
                02/02/20
              </h2>
              <h2
                data-aos="fade-out"
                data-aos-duration="3000"
                class="text-white mb-5"
              >
                News Category
              </h2>
              <h1
                data-aos="fade-out"
                data-aos-duration="3000"
                class="text-white mb-5"
              >
                Visiting National Taiwan University of Science and Technology
              </h1>
            </template>
            <template v-else-if="title === 'Researches Detail'">
              <!-- Explainers Detail -->
              <h2
                data-aos="fade-out"
                data-aos-duration="3000"
                class="text-white mb-3"
              >
                FINDER FOR PHYSICS
              </h2>
              <h1
                data-aos="fade-out"
                data-aos-duration="3000"
                class="text-white mb-5 pb-5"
              >
                Provisional ballots
              </h1>
              <!-- Projects Detail -->
              <!-- <h2 data-aos="fade-out" data-aos-duration="3000" class="text-white mb-3">
                Projects
              </h2>
              <h1 data-aos="fade-out" data-aos-duration="3000" class="text-white mb-5 pb-5">
                Big Data Analytics Living Lab: Better understanding
              </h1> -->
            </template>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Projects from "@/components/Projects/Projects";
import Explainers from "@/components/Explainers/Explainers";
import Teams from "@/components/Teams/Teams";

export default {
  name: "NavTabs",
  components: {
    Projects,
    Explainers,
    Teams,
  },
  props: ["title"],
};
</script>

<style lang="scss" scoped>
@import "NavTabs.scss";
</style>
