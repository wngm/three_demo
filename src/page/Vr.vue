<script setup>
import { ref, nextTick } from "vue";
import Map, { addLines } from "../three/a";
// const box = ref(null);
// const count = ref(2);
// const addcount = () => {
//   count.value += 1;
//   console.log(box);
// };
// nextTick(() => {
//   const map = new Map({ dom: box.value });
//   addLines(map);
// });
</script>

<template>
  <!-- <div @click="addcount">{{count}}</div> -->
  <div class="three" ref="box"></div>
</template>

<style scope>
.three {
  width: 100%;
  height: 100%;
  background-color: #09c;
}
canvas {
  width: 100%;
  height: 100%;
}
</style>
