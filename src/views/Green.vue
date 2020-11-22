<template>
  <div class="stoplight">
    <div class="stoplight__dim stoplight_red"></div>
    <div class="stoplight__dim stoplight_yellow"></div>
    <div class="stoplight_green"></div>
  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'Green',
  mounted () {
    setTimeout(()=>{
      console.log('переход на желтый с зеленого')
    router.push({ path: 'yellow' })
    }, 15000)
  },
  components: {

  }
}
</script>

<style>
.stoplight {
  background-color:grey;
  width:200px;
  height: 600px;
  margin: 0 auto;
  border-radius: 8px;
}

.stoplight_red {
  height: 200px;
  border-radius: 50%;
  background-color: red;
}

.stoplight_yellow {
  height: 200px;
  border-radius: 50%;
  background-color: yellow;
}

.stoplight_green {
  height: 200px;
  border-radius: 50%;
  background-color: green;
}

.stoplight__dim {
  opacity: 0.5;
}
</style>