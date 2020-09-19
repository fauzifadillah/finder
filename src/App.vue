<template>
  <div>
    <div :class="{ preloader: preloader }" id="load-screen"></div>
    <div class="cursor"></div>
    <div class="cursor-follower"></div>
    <router-view />
  </div>
</template>

<script>
import $ from "jquery";
import { TweenMax } from "gsap";

export default {
  name: "App",
  data() {
    return {
      preloader: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.preloader = false;
    }, 1000);
    // CURSOR
    var cursor = $(".cursor"),
      follower = $(".cursor-follower");

    var posX = 0,
      posY = 0;

    var mouseX = 0,
      mouseY = 0;

    TweenMax.to({}, 0.006, {
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(follower, {
          css: {
            left: posX - 12,
            top: posY - 12,
          },
        });

        TweenMax.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY,
          },
        });
      },
    });

    $(document).on("mousemove", function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
    // yellow circle
    $(document.querySelector(".hidetext")).on("mouseenter", function () {
      cursor.addClass("active");
      console.log("active");
      follower.addClass("active");
    });
    $(document.querySelector(".hidetext")).on("mouseleave", function () {
      cursor.removeClass("active");
      follower.removeClass("active");
    });
  },
};
</script>

<style lang="scss">
@import "App.scss";
</style>
