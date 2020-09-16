<template>
  <div>
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
  mounted() {
    // CURSOR
    var cursor = $(".cursor"),
      follower = $(".cursor-follower");

    var posX = 0,
      posY = 0;

    var mouseX = 0,
      mouseY = 0;

    TweenMax.to({}, 0.016, {
      repeat: -1,
      onRepeat: function() {
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

    $(document).on("mousemove", function(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
  },
};
</script>

<style lang="scss">
@import "App.scss";
</style>
