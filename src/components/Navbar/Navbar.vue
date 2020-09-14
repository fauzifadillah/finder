<template>
  <div class="container-navbar">
    <div class="row">
      <div class="col" data-aos="flip-up">
        <router-link :to="{ name: 'home' }">
          <img src="../../assets/logo.png" />
        </router-link>
      </div>
      <div class="col-auto mr-4 pr-4 ml-auto burger-navbar">
        <div class="menu-wrap">
          <input type="checkbox" class="toggler" />
          <div class="hamburger ml-auto">
            <div></div>
          </div>
          <!-- <div class="new-hamburger ml-auto">
            <div></div>
          </div>-->
          <div class="menu">
            <div>
              <div>
                <ul class="pl-0">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/guides">Guides</a>
                  </li>
                  <li>
                    <a href="/publications">Publications</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                  <li>
                    <a href="/news">News</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
@import "Navbar.scss";
</style>
