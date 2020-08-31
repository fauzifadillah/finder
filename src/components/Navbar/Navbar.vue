<template>
  <div class="container-navbar">
    <div class="row">
      <div class="col">
        <router-link :to="{ name: 'home' }">
          <img src="../../assets/logo.png" />
        </router-link>
      </div>
      <div class="col-auto ml-auto burger-navbar">
        <!-- <div class="visible"></div>
        <div class="visible"></div> -->
        <div class="menu-wrap">
          <input type="checkbox" class="toggler" />
          <div class="hamburger"><div></div></div>
          <div class="menu">
            <div>
              <div>
                <ul>
                  <li><a href="/guides">Research</a></li>
                  <li><a href="/guides">Publication</a></li>
                  <li><a href="/guides">Team</a></li>
                  <li><a href="/contact">Contact</a></li>
                  <li><a href="/news">News</a></li>
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
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "Navbar",
  // components: {
  //   HelloWorld
  // }
};
</script>

<style lang="scss" scoped>
@import "Navbar.scss";
</style>
