<template>
  <div class="title">
    <span @click="$router.go(-1)" class="leftArrow"></span>
    <span class="text">{{ title }}</span>
  </div>
</template>
<script>
export default {
  props: ['title'],
  name: 'title'
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.title {
  position: relative;
  top: 0;
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background-color: #b81c22;
  .leftArrow {
    position: absolute;
    left: 25px;
    top: 17.5px;
    width: 17.5px;
    height: 17.5px;
    border-top: 2px solid #fff;
    border-left: 2px solid #fff;
    transform: rotate(-45deg);
  }
  .text {
    display: inline-block;
    margin: 0 auto;
    font-size: 18.75px;
    color: #fff;
  }
}

* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}

</style>
