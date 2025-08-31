<script setup>
import { ref } from "vue";
import IconsCard from "../elements/IconsCard.vue";
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
    <div class="footer-card">
      <time>{{ date }}</time>
      <IconsCard />
    </div>
  </div>
</template>

<style scoped>
.container-nota {
  break-inside: avoid;
  margin-bottom: 20px;
  word-wrap: break-word;
  padding: 20px;
  border-radius: 20px;
  max-width: 100%;
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
.footer-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
