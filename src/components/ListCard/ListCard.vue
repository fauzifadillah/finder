<template>
  <!-- News -->
  <template v-if="title === 'News'">
    <div class="row mb-4 d-flex">
      <div class="col-md-4 mb-4" v-for="event in news" :key="event.id">
        <div class="container-card">
          <div class="card-news" data-aos="fade-down">
            <router-link :to="`/news/detail/${event.id}`">
              <div class="row">
                <img
                  class="card-news-image"
                  v-bind:src="
                    'https://cms.finder.ac.id' + event.thumbnail[0].url
                  "
                  alt="news"
                />
              </div>
              <div class="mt-2">
                <b>{{ event.title }}</b>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>

  <!-- Publications -->
  <template v-else-if="title === 'Publications'">
    <!-- Date Publications -->
    <!-- 2020 -->
    <div>
      <h3>2020</h3>
      <hr />
    </div>
    <div class="container-paper mb-5">
      <div
        class="col-12 p-0"
        v-for="publication in publications"
        :key="publication.id"
      >
        <div v-if="publication.year == 2020">
          <p>
            <a :href="publication.doi">
              <b class="text-primary">
                {{ publication.author }}
              </b>
            </a>
            {{ "," }}
            <a :href="publication.doi">
              <b class="text-dark">
                {{ publication.title }}
              </b>
            </a>
            {{ "," }}
            {{ publication.publikasi }}
            {{ "," }}
            {{ publication.year }}
          </p>
        </div>
      </div>
    </div>
    <!-- 2019 -->
    <div>
      <h3>2019</h3>
      <hr />
    </div>
    <div class="container-paper mb-5">
      <div
        class="col-12 p-0"
        v-for="publication in publications"
        :key="publication.id"
      >
        <div v-if="publication.year == 2019">
          <p>
            <a :href="publication.doi">
              <b class="text-primary">
                {{ publication.author }}
              </b>
            </a>
            {{ "," }}
            <a :href="publication.doi">
              <b class="text-dark">
                {{ publication.title }}
              </b>
            </a>
            {{ "," }}
            {{ publication.publikasi }}
            {{ "," }}
            {{ publication.year }}
          </p>
        </div>
      </div>
    </div>
    <!-- 2018 -->
    <div>
      <h3>2018</h3>
      <hr />
    </div>
    <div class="container-paper mb-5">
      <div
        class="col-12 p-0"
        v-for="publication in publications"
        :key="publication.id"
      >
        <div v-if="publication.year == 2018">
          <p>
            <a :href="publication.doi">
              <b class="text-primary">
                {{ publication.author }}
              </b>
            </a>
            {{ "," }}
            <a :href="publication.doi">
              <b class="text-dark">
                {{ publication.title }}
              </b>
            </a>
            {{ "," }}
            {{ publication.publikasi }}
            {{ "," }}
            {{ publication.year }}
          </p>
        </div>
      </div>
    </div>
  </template>

  <!-- Rnds -->
  <template v-else-if="title === 'Rnds'">
    <div class="col-12 pl-0 pt-4" data-aos="fade-down">
      <!-- <h4 class="font-weight-bold">FINDER FOR BIOMATERIALS</h4>
      <p>Research about education at a glance</p> -->
    </div>
    <div class="col-12 p-0">
      <div class="row mb-4 d-flex">
        <div class="col-md-4 mb-4" v-for="rnd in rnds" :key="rnd.id">
          <div class="container-card">
            <div class="card-explainers" data-aos="fade-down">
              <div class="row hover-tb p-4">
                <router-link :to="`/rnd/detail/${rnd.id}`">
                  <div class="col-12 mb-5">
                    <h5>{{ rnd.title }}</h5>
                  </div>
                  <div class="col-12 card-explainers-learn-more">
                    <a href>
                      <u>Learn more</u>
                    </a>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <!-- Projects -->
  <!-- <template v-else-if="title === 'Projects'">
    <div class="row mb-4">
      
      <div class="col-md-6 pr-5">
        <div class="container-card">
          <div
            class="row card-projects"
            data-aos="fade-down"
            v-for="(project, i) in projects"
            :key="project.id"
          >
            <div v-if="!(i % 2)" class="mb-5">
              <router-link :to="`/project/detail/${project.id}`">
                <div class="hover-tb p-4">
                  <div class="col-12 p-0 card-projects-name">
                    <h6>{{ project.topic }}</h6>
                  </div>
                  <div class="col-12 p-0">
                    <img
                      class="card-projects-image"
                      v-bind:src="
                        'https://cms.finder.ac.id' + project.thumbnail[0].url
                      "
                      alt="project"
                    />
                  </div>
                  <div class="row">
                    <b class="card-projects-title">{{ project.title }}</b>
                  </div>
                  <div>
                    <b>
                      {{ project.short_desc }}
                    </b>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6 pr-5">
        <div class="container-card">
          <div
            class="row card-projects"
            data-aos="fade-down"
            v-for="(project, i) in projects"
            :key="project.id"
          >
            <div v-if="i % 2" class="mb-5">
              <router-link :to="`/project/detail/${project.id}`">
                <div class="hover-tb p-4">
                  <div class="col-12 p-0 card-projects-name">
                    <h6>{{ project.topic }}</h6>
                  </div>
                  <div class="col-12 p-0">
                    <img
                      class="card-projects-image"
                      v-bind:src="
                        'https://cms.finder.ac.id' + project.thumbnail[0].url
                      "
                      alt="project"
                    />
                  </div>
                  <div class="row">
                    <b class="card-projects-title">{{ project.title }}</b>
                  </div>
                  <div>
                    <b>
                      {{ project.short_desc }}
                    </b>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template> -->

  <!-- Teams -->
  <template v-else-if="title === 'Teams'">
    <div class="row mb-4">
      <!-- Left Side -->
      <div class="col-md-6 pr-5">
        <div class="container-card">
          <div
            class="card-teams"
            data-aos="fade-down"
            v-for="(team, i) in teams"
            :key="team.id"
          >
            <div v-if="!(i % 2)" class="mb-5">
              <div class="hover-tb p-4">
                <div class="row card-teams-location">
                  <div class="col">
                    <h6>{{ team.location }}</h6>
                  </div>
                  <div class="col-auto ml-auto">
                    <h6>{{ team.institution }}</h6>
                  </div>
                </div>
                <div class="row card-teams-profile">
                  <div class="col">
                    <h2>{{ team.name }}</h2>
                    <p>{{ team.job }}</p>
                  </div>
                  <div class="col-auto ml-auto">
                    <img
                      class="card-teams-image"
                      v-bind:src="
                        'https://cms.finder.ac.id' + team.avatar[0].url
                      "
                      alt="team"
                    />
                  </div>
                </div>
                <div class="row card-teams-contact">
                  <div class="col-sm-8 pl-0">
                    <a href>
                      <u>{{ team.email }}</u>
                    </a>
                    <a href>
                      <u>{{ team.website }}</u>
                    </a>
                  </div>
                  <div
                    class="col-sm-4 card-teams-contact-link text-sm-right mt-3 mt-sm-0 pl-0"
                  >
                    <span v-if="team.media_image_1">
                      <a :href="`${team.media_link_1}`">
                        <img
                          class="rounded-circle"
                          v-bind:src="
                            'https://cms.finder.ac.id' +
                              team.media_image_1.formats.thumbnail.url
                          "
                          alt="link"
                          width="40"
                          height="40"
                        />
                      </a>
                    </span>
                    <span v-if="team.media_image_2" class="ml-1">
                      <a :href="`${team.media_link_2}`">
                        <img
                          class="rounded-circle"
                          v-bind:src="
                            'https://cms.finder.ac.id' +
                              team.media_image_2.formats.thumbnail.url
                          "
                          alt="link"
                          width="40"
                          height="40"
                        />
                      </a>
                    </span>
                    <span v-if="team.media_image_3" class="ml-1">
                      <a :href="`${team.media_link_3}`">
                        <img
                          class="rounded-circle"
                          v-bind:src="
                            'https://cms.finder.ac.id' +
                              team.media_image_3.formats.thumbnail.url
                          "
                          alt="link"
                          width="40"
                          height="40"
                        />
                      </a>
                    </span>
                  </div>
                </div>
                <div class="row">
                  <p>{{ team.body }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Right Side -->
      <div class="col-md-6 pl-5">
        <div class="container-card">
          <div
            class="card-teams"
            data-aos="fade-down"
            v-for="(team, i) in teams"
            :key="team.id"
          >
            <div v-if="i % 2" class="mb-5">
              <div class="hover-tb p-4">
                <div class="row card-teams-location">
                  <div class="col">
                    <h6>{{ team.location }}</h6>
                  </div>
                  <div class="col-auto ml-auto">
                    <h6>{{ team.institution }}</h6>
                  </div>
                </div>
                <div class="row card-teams-profile">
                  <div class="col">
                    <h2>{{ team.name }}</h2>
                    <p>{{ team.job }}</p>
                  </div>
                  <div class="col-auto ml-auto">
                    <img
                      class="card-teams-image"
                      v-bind:src="
                        'https://cms.finder.ac.id' + team.avatar[0].url
                      "
                      alt="team"
                    />
                  </div>
                </div>
                <div class="row card-teams-contact">
                  <div class="col-sm-8 pl-0">
                    <a href>
                      <u>{{ team.email }}</u>
                    </a>
                    <a href>
                      <u>{{ team.website }}</u>
                    </a>
                  </div>
                  <div
                    class="col-sm-4 card-teams-contact-link text-sm-right mt-3 mt-sm-0 pl-0"
                  >
                    <span v-if="team.media_image_1">
                      <a :href="`${team.media_link_1}`">
                        <img
                          class="rounded-circle"
                          v-bind:src="
                            'https://cms.finder.ac.id' +
                              team.media_image_1.formats.thumbnail.url
                          "
                          alt="link"
                          width="40"
                          height="40"
                        />
                      </a>
                    </span>
                    <span v-if="team.media_image_2" class="ml-1">
                      <a :href="`${team.media_link_2}`">
                        <img
                          class="rounded-circle"
                          v-bind:src="
                            'https://cms.finder.ac.id' +
                              team.media_image_2.formats.thumbnail.url
                          "
                          alt="link"
                          width="40"
                          height="40"
                        />
                      </a>
                    </span>
                    <span v-if="team.media_image_3" class="ml-1">
                      <a :href="`${team.media_link_3}`">
                        <img
                          class="rounded-circle"
                          v-bind:src="
                            'https://cms.finder.ac.id' +
                              team.media_image_3.formats.thumbnail.url
                          "
                          alt="link"
                          width="40"
                          height="40"
                        />
                      </a>
                    </span>
                  </div>
                </div>
                <div class="row">
                  <p>{{ team.body }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <!-- Services -->
  <template v-else-if="title === 'Services'">
    <!-- Sub Title -->
    <!-- <div class="col-12 pl-0 mb-4" data-aos="fade-down">
      <h4 class="font-weight-bold">RnD Services</h4>
      <p>Research about education at a glance</p>
    </div> -->
    <div class="col-12 mb-2 p-0" v-for="service in services" :key="service.id">
      <a :href="`${service.href}`">
        <div class="container-card">
          <div class="card-services" data-aos="fade-down">
            <div class="row hover-tb p-4">
              <div class="col-12 mb-4">
                <h5>{{ service.title }}</h5>
              </div>
              <div class="col-12 mt-1">
                <a href>
                  <u>Learn more</u>
                </a>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
    <!-- Sub Title -->
    <!-- <div class="col-12 pl-0 mt-4" data-aos="fade-down">
      <h4 class="font-weight-bold">Analysis</h4>
      <p>Research about education at a glance</p>
    </div> -->
    <!-- <div
      class="col-12 mb-2 p-0"
      v-for="service in services"
      :key="service.id"
    >
      <router-link :to="`/service/detail/${service.id}`">
        <div class="container-card">
          <div class="card-services" data-aos="fade-down">
            <div class="row hover-tb p-4">
              <div class="col-12 mb-5">
                <h5>{{ service.title }}</h5>
              </div>
              <div class="col-12">
                <a href>
                  <u>Learn more</u>
                </a>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div> -->
    <!-- Sub Title -->
    <!-- <div class="col-12 pl-0 mt-4" data-aos="fade-down">
      <h4 class="font-weight-bold">Journal Services</h4>
      <p>Research about education at a glance</p>
    </div> -->
    <!-- <div
      class="col-12 mb-2 p-0"
    >
      <a href="https://www.jptranstech.or.id">
        <div class="container-card">
          <div class="card-services" data-aos="fade-down">
            <div class="row hover-tb p-4">
              <div class="col-12 mb-5">
                <h5>Journal Services</h5>
              </div>
              <div class="col-12">
                <a href="https://www.jptranstech.or.id">
                  <u>Learn more</u>
                </a>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div> -->
  </template>
</template>

<script>
import axios from "axios";
export default {
  name: "ListCard",
  props: {
    title: { type: String, default: "" },
  },
  data() {
    return {
      rnds: [],
      projects: [],
      services: [],
      news: [],
      teams: [],
      publications: [],
      error: null,
    };
  },
  async beforeMount() {
    try {
      const rnd_response = await axios.get(
        "https://cms.finder.ac.id/research-explainers"
      );
      const project_response = await axios.get(
        "https://cms.finder.ac.id/projects"
      );
      const service_response = await axios.get(
        "https://cms.finder.ac.id/services"
      );
      const news_response = await axios.get(
        "https://cms.finder.ac.id/news-events"
      );
      const team_response = await axios.get(
        "https://www.cms.finder.ac.id/teams?_sort=id:ASC"
      );
      const publication_response = await axios.get(
        "https://cms.finder.ac.id/publications"
      );

      this.rnds = rnd_response.data;
      this.projects = project_response.data;
      this.services = service_response.data;
      this.news = news_response.data;
      this.teams = team_response.data;
      this.publications = publication_response.data;
    } catch (error) {
      this.error = error;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "ListCard.scss";
</style>
