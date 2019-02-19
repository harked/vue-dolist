<template>
  <div class="about">
    <img class="img-center" :src="image">
    <h1>Start Planning Today.</h1>
    <p> Life can feel overwhelming, but it doesn’t have to.<br/>
    Our <span class="blue-todo strong">Vue-dolist</span> app lets you keep track of everything in one place, so you can <span class="blue-todo strong">get it all done</span> and enjoy more peace of mind along the way. </p>
  </div>
</template>

<script>
  import image from "../assets/progress.png"

  export default {
      data: function () {
          return {
              image: image
          }
      }
  }
</script>

<style scoped>
  .about {
    padding: 20px;
  }

  .about > h1 {
    margin-bottom: 10px;
  }

  .img-center {
    height: 150px;
  }
</style> 