<script setup>
import { ref } from "vue";

const props = defineProps({
  content: String,
  width: [Number, String],
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
  max-width: 230px;
  cursor: pointer;
  background: #3b82f6;
  color: #ffffff;
  border-radius: 20px;
  padding: 12px;
  font-size: 1.25rem;
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

@media (max-width: 720px) {
  button {
    max-width: 200px;
    padding: 12px;
    font-size: 1.125rem;
  }
}

@media (max-width: 420px) {
  button {
    max-width: 160px;
    padding: 10px;
    font-size: 1rem;
  }
}
</style>
