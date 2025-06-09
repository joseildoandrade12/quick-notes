<script setup>
import { ref } from "vue";
const props = defineProps({
  title: String,
  content: String,
  date: String,
});

const modificatorStyle = ref(false);
if (props.title) {
  modificatorStyle.value = true;
}
</script>

<template>
  <div class="container-nota">
    <h2 v-show="modificatorStyle">{{ title }}</h2>
    <p class="content">
      {{ content }}
    </p>
    <time>{{ date }}</time>
  </div>
</template>

<style scoped>
.container-nota {
  word-wrap: break-word;
  padding: 20px;
  border-radius: 20px;
  max-width: 520px;
  border: 1px solid #111827;
}
h2 {
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 20px;
}
.content {
  line-height: 1.5;
  letter-spacing: 1px;
  margin-bottom: 40px;
}
</style>
