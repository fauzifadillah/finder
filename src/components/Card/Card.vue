<template>
  <div class="container-card">
    <template v-if="title === 'News'">
      <div class="card-news" data-aos="fade-down">
        <div class="row">
          <img class="card-news-image" src="../../assets/image-1.png" alt />
        </div>
        <!-- <div class="row pt-3">
          <div class="col-auto pl-0">
            <img src="../../assets/red-symbol.png" alt />
          </div>
          <div class="col">
            <p class="pt-1">News Category</p>
          </div>
        </div>-->
        <div class="mt-2">
          <b>NanoMag Print-g a new generation Magnetic Beads Covid-19</b>
        </div>
      </div>
    </template>
    <template v-else-if="title === 'Researches'">
      <div class="card-researches" data-aos="fade-down">
        <div class="row hover-tb p-4">
          <div class="col-12 mb-5">
            <h5>Provisional ballots</h5>
          </div>
          <div class="col-12 mb-3">
            <a href>
              <u>Learn more</u>
            </a>
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="title === 'Projects'">
      <div class="row card-projects" data-aos="fade-down">
        <div class="hover-tb p-4">
          <div class="col-12 p-0 card-projects-name">
            <h6>PROJECTS NAME</h6>
          </div>
          <div class="col-12 p-0">
            <img class="card-news-image" src="../../assets/image-1.png" alt />
          </div>
          <div class="row">
            <b class="card-projects-title">Big Data Analytics Living Lab: Better understanding</b>
          </div>
          <div>
            <p>
              Lorem ipsum dolor ist amet lorem ipsum dolor ist amet Lorem ipsum
              dolor ist amet lorem ipsum dolor ist amet
            </p>
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="title === 'Teams'">
      <div class="card-teams" data-aos="fade-down">
        <div class="hover-tb p-4">
          <div class="row card-teams-location">
            <div class="col">
              <h6>BANDUNG, ID</h6>
            </div>
            <div class="col-auto ml-auto">
              <h6>PADJADJARAN UNIVERSITY</h6>
            </div>
          </div>
          <div class="row card-teams-profile">
            <div class="col">
              <h2>I Made Joni</h2>
              <p>Professor Nanotechnology</p>
            </div>
            <div class="col-auto ml-auto">
              <img src="../../assets/author-image.png" alt />
            </div>
          </div>
          <div class="row card-teams-contact">
            <div class="col-12 pl-0">
              <a href>
                <u>Email</u>
              </a>
            </div>
            <div class="col-12 pl-0">
              <a href>
                <u>Website</u>
              </a>
            </div>
          </div>
          <div class="row">
            <p>
              “Prestasi Adalah Kemampuan Dikalikan Pekerjaan” Camellia
              Panatarani, holder to the title of Doctor of Engineering from
              Hiroshima University, Japan, now works as a lecturer and
              researcher at the Department of Physics, MIPA Faculty at
              University of Padjadjaran, Bandung. Through her research, which
              focuses on Phosphorus (Luminescent Material) commonly used within
              the energy efficient lighting industry, display industry, and many
              others, she hopes that Indonesia can produce its own range of
              phosphorus products using simple methods. The research titled
              “Synthesis Halophospor on A Simple Solution Method” has been
              submitted to L’Oréal Indonesia Fellowship For Women In Science of
              2008, and was completed in 2009.
            </p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["title"],
};
</script>

<style lang="scss" scoped>
@import "Card.scss";
</style>
