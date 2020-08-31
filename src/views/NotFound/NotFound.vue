<template>
  <div id="wrapper-404">
    <h1>Page Not Found</h1>
    <router-link :to="'/'">
      <p>Kembali ke Home</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>
