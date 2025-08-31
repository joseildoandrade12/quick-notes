<script setup>
import NotaNova from "./NotaNova.vue";
import { usePropsNotes } from "@/composables/usePropsNotes";
import { useValueGrid } from "@/composables/useValueGrid";

const { objData } = usePropsNotes();
const { numberGrid } = useValueGrid();

if (!objData.value.length && localStorage.length) {
  let items = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (+key) {
      const objectItens = JSON.parse(localStorage.getItem(key));
      items.push({
        title: objectItens.title,
        content: objectItens.content,
        date: objectItens.date,
        id: i,
      });
    }
  }
  objData.value = items;
}
</script>

<template>
  <div class="container-notas" :style="{ columnCount: numberGrid }">
    <NotaNova v-for="{ title, content, date, id } in objData" :title :content :date :id="id" />
  </div>
</template>

<style scoped>
.container-notas {
  column-count: 4;
  gap: 20px;
  align-items: start;
}
</style>
