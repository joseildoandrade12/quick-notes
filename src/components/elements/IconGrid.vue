<script setup>
import { ref, computed } from "vue";
import { useValueGrid } from "@/composables/useValueGrid";

window.addEventListener("resize", blockCountAddGrid);

const grids = [
  { name: "grid-1", num: 1 },
  { name: "grid-2", num: 2 },
  { name: "grid-4", num: 4 },
];
const count = ref(0);
const classAnimation = ref(false);

const gridSelected = computed(() => {
  return grids[count.value];
});

function blockCountAddGrid() {
  const windowWidth = window.innerWidth;
  if (windowWidth <= 940) {
    if (count.value > 1) count.value = 0;
  }
}

function countAdd() {
  count.value++;
  classAnimation.value = true;

  blockCountAddGrid();
  if (count.value >= grids.length) count.value = 0;
  useValueGrid(gridSelected.value.num);

  setTimeout(() => {
    classAnimation.value = false;
  }, 300);
}

const linkImage = computed(() => `icons/${gridSelected.value.name}.svg`);
</script>

<template>
  <img @click="countAdd" :class="{ animation: classAnimation }" :src="linkImage" alt="icon-grid" />
</template>

<style scoped>
img {
  display: inline-block;
  margin-right: 36px;
  width: 36px;
  height: 36px;
}

img.animation {
  animation: changeSoft 0.4s forwards;
}

@keyframes changeSoft {
  from {
    transform: rotate(90deg);
    opacity: 20%;
  }

  to {
    transform: rotate(0deg);
    opacity: 100%;
  }
}
</style>
