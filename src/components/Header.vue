<script setup>
import { ref } from "vue";

import Button from "./elements/Button.vue";
import IconGrid from "./elements/IconGrid.vue";
import NotaForm from "./NotaForm.vue";

const modalActive = ref(false);

function toggleModal() {
  setTimeout(() => {
    modalActive.value = !modalActive.value;
  }, 200);
}
</script>

<template>
  <div class="container">
    <h1>Quick Notes</h1>
    <div class="elements-header">
      <IconGrid />
      <Button @click="toggleModal" content="Create Note" width="230">
        <span class="icon-add"></span>
      </Button>
    </div>
    <NotaForm v-show="modalActive" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
}

h1 {
  font-size: 2.75rem;
}

.icon-add {j
  display: inline-block;
  position: relative;
  width: 15px;
  height: 15px;
  margin-right: 15px;
  margin-bottom: 2px;
}

.icon-add::before,
.icon-add::after {
  content: "";
  position: absolute;
  background-color: white;
  border-radius: 10px;
  width: 15px;
  height: 4px;
  top: 50%;
  left: 0;
}

.icon-add::after {
  transform: rotate(90deg);
}

.elements-header {
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>
