<template>
  <div class="about">
    <img class="img-center" :src="image">
    <h1>Start Planning Today.</h1>
    <p> Life can feel overwhelming, but it doesn’t have to. Vue-dolist lets you keep track of everything in one place, so you can get it all done and enjoy more peace of mind along the way. </p>
  </div>
</template>

<script>
import image from "../assets/keepmovingforward.jpg"

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
    padding: 30px;
  }

  .about > h1 {
    margin-bottom: 10px;
  }

  .img-center {
    height: 250px;
  }
</style> 