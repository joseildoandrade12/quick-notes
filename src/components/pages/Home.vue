<script setup>
import NotaNova from "./NotaNova.vue";
import { usePropsNotes } from "@/composables/usePropsNotes";
import { useValueGrid } from "@/composables/useValueGrid";

const { objData } = usePropsNotes();
const { numberGrid } = useValueGrid();
</script>

<template>
  <div class="container-notas" :style="{ columnCount: numberGrid }">
    <NotaNova v-for="{ title, content, date } in objData" :title :content :date />
  </div>
</template>

<style scoped>
.container-notas {
  column-count: 4;
  gap: 20px;
  align-items: start;
}
</style>
