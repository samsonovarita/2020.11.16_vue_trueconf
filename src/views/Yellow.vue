<template>
  <div class="stoplight">
    <div class="stoplight__dim stoplight_red"></div>
    <div class="stoplight_yellow"></div>
    <div class="stoplight__dim stoplight_green"></div>
  </div>
</template>

<style>
.stoplight {
  background-color:grey;
  width:200px;
  height: 600px;
  margin: 0 auto;
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