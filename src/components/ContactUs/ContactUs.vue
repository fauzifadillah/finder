<template>
  <form>
    <div class="row py-2">
      <div class="col-md">
        <div class="form-group">
          <input type="first-name" class="form-control" id="firstName" aria-describedby="emailHelp" placeholder="First name">
        </div>
      </div>
      <div class="col-md">
        <div class="form-group">
          <input type="last-name" class="form-control" id="lastName" aria-describedby="emailHelp" placeholder="Last name">
        </div>
      </div>
    </div>
    <div class="row py-2">
      <div class="col-md">
        <div class="form-group">
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email">
        </div>
      </div>
      <div class="col-md">
        <div class="form-group">
          <input type="phone-number" class="form-control" id="phoneNumber" aria-describedby="emailHelp" placeholder="Phone number">
        </div>
      </div>
    </div>
    <div class="row py-2">
      <div class="col-md">
        <div class="form-group">
          <input type="country" class="form-control" id="country" aria-describedby="emailHelp" placeholder="Country">
        </div>
      </div>
      <div class="col-md">
        <div class="form-group">
          <input type="subject" class="form-control" id="subject" aria-describedby="emailHelp" placeholder="Subject">
        </div>
      </div>
    </div>
    <div class="py-2">
      <div class="form-group">
        <textarea type="message" class="form-control" id="message" aria-describedby="emailHelp" placeholder="Your message" rows="4"></textarea>
      </div>
    </div>
    <div>
      <button type="button" class="btn btn-dark pt-2 px-5"><h5>Send message</h5></button>
    </div>
  </form>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "ContactUs",
  // components: {
  //   HelloWorld
  // }
};
</script>

<style lang="scss" scoped>
@import "ContactUs.scss";
</style>
