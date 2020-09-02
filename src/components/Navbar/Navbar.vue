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
          <div class="hamburger ml-auto"><div></div></div>
          <div class="menu">
            <div>
              <div>
                <ul>
                  <li><a href="/"><h1>Home</h1></a></li>
                  <li><a href="/guides"><h1>Guides</h1></a></li>
                  <li><a href="/publications"><h1>Publication</h1></a></li>
                  <li><a href="/contact"><h1>Contact</h1></a></li>
                  <li><a href="/news"><h1>News</h1></a></li>
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
  name: "Navbar"
};
</script>

<style lang="scss" scoped>
@import "Navbar.scss";
</style>
