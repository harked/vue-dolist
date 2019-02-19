<template>
  <div class="contact">
    <img class="img-center" :src="contact_image">
    <h1>What kind I help you with?</h1>
    <p> Feel free contact me : <a href="mailto:harke@nanonimos.com">harke@nanonimos.com</a> </p>
  </div>
</template>

<script>
  import contact_image from "../assets/contact.png"

  export default {
      data: function () {
          return {
              contact_image: contact_image
          }
      }
  }
</script>

<style scoped>
  .contact {
    padding: 30px;
    text-align: center;
  }

  .contact > h1 {
    margin-bottom: 10px;
  }
</style> 