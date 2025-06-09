<script setup>
import NotaNova from "./NotaNova.vue";
import { usePropsNotes } from "@/composables/usePropsNotes";

const { objData } = usePropsNotes();
</script>

<template>
  <div class="container-notas">
    <NotaNova v-for="{ title, content, date } in objData" :title :content :date />
  </div>
</template>

<style scoped>
.container-notas {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, minmax(420px, 1fr));
  grid-template-rows: auto;
  align-items: start;
  grid-auto-flow: dense;
  grid-template-rows: auto;
}
</style>
