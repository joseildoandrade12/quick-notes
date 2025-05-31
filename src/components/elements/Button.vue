<script setup>
import { ref } from "vue";

const props = defineProps({
  content: String,
  width: Number,
});

const classAnimation = ref(false);

function addClassButton() {
  classAnimation.value = true;
  setTimeout(() => {
    classAnimation.value = false;
  }, 200);
}
</script>

<template>
  <button :class="{ animation: classAnimation }" @click="addClassButton" :style="{ width: width + 'px' }">
    <slot />{{ content }}
  </button>
</template>

<style scoped>
button {
  cursor: pointer;
  background: #3b82f6;
  color: #ffffff;
  border-radius: 20px;
  height: 60px;
  font-size: 1.5rem;
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.2);
}

button.animation {
  animation: pressButton 0.3 forwards;
}

@keyframes pressButton {
  from {
    transform: translate(0px, 0px);
  }

  to {
    transform: translate(3px, 3px);
    box-shadow: 0 0 0;
  }
}
</style>
