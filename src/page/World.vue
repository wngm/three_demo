<script setup>
import { ref, nextTick } from "vue";
import World from "../three/minecraft";
const box = ref(null);
const count = ref(2);

nextTick(() => {
  const world = new World({ dom: box.value });
});
</script>
s

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
