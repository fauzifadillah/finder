<template>
  <div class="container-footer">
    <div class="row">
      <div class="col-md">
        <img src="../../assets/footer-logo.png" alt="" />
        <br />
        <div class="row mt-4 mb-2">
          <span class="mr-2"
            ><i class="fa fa-envelope" aria-hidden="true"></i
          ></span>
          <a href="mailto:support.finder@unpad.ac.id"><u>support.finder@unpad.ac.id</u></a>
        </div>
        <div class="row">
          <span class="mr-2"
            ><i class="fa fa-instagram" aria-hidden="true"></i
          ></span>
          <span
            ><p class="text-grey">
              @finder_id
            </p></span
          >
        </div>
      </div>
      <div class="col-md-auto">
        <p class="footer-address">
          Headquarters <br />
          Universitas Padjadjaran <br />
          Jalan Raya Bandung-Sumedang KM.21 <br />
          West Java, Indonesia
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-md">
        <p class="text-grey">Copyright 2020 FiNder.</p>
      </div>
      <div class="col-md-auto">
        <p class="text-grey">All right reserved.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
@import "Footer.scss";
</style>
