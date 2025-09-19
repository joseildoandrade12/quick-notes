<script setup>
import { ref } from "vue";
import IconsCard from "../elements/IconsCard.vue";

const props = defineProps({
  title: String,
  content: String,
  date: String,
  id: Number,
});
const modificatorStyle = ref(false);

if (props.title) {
  modificatorStyle.value = true;
}
</script>

<template>
  <div class="container-nota" :id>
    <h2 v-show="modificatorStyle">{{ title }}</h2>
    <p class="content">
      {{ content }}
    </p>
    <div class="footer-card">
      <time>{{ date }}</time>
      <IconsCard :idCard="id" />
    </div>
  </div>
</template>

<style scoped>
.container-nota {
  break-inside: avoid;
  margin-bottom: 1rem;
  word-wrap: break-word;
  padding: 1rem;
  border-radius: 20px;
  max-width: 100%;
  border: 1px solid #111827;
}
h2 {
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 1.25rem;
}
.content {
  line-height: 1.5;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
}
.footer-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 769px) {
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .content {
    margin-bottom: 1.25rem;
  }
  time {
    font-size: 0.825rem;
  }
}

@media (max-width: 469px) {
  .container-nota {
    padding: 0.875rem;
    border-radius: 1rem;
  }
  h2 {
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }
  .content {
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }
  .footer-card {
    align-items: start;
    flex-direction: column;
  }
}
</style>
