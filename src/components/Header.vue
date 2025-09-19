<script setup>
import { ref } from "vue";

import Button from "./elements/Button.vue";
import IconGrid from "./elements/IconGrid.vue";
import NotaForm from "./NotaForm.vue";

const modalActive = ref(false);
const modal = ref(null);

function clickOutsideModal(event) {
  const modalEl = modal.value.container;
  if (modalActive && !modalEl.contains(event.target)) {
    modalActive.value = !modalActive.value;
    window.removeEventListener("click", clickOutsideModal);
  }
}

function toggleModal() {
  setTimeout(() => {
    modalActive.value = !modalActive.value;
    window.addEventListener("click", clickOutsideModal);
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
    <NotaForm ref="modal" v-show="modalActive" @toggle="modalActive = !modalActive" />
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

.icon-add {
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
  border-radius: 6px;
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

@media (max-width: 720px) {
  .container {
    display: block;
    margin-bottom: 40px;
  }
  h1 {
    font-size: 2.25rem;
    margin-bottom: 20px;
    display: block;
    text-wrap: nowrap;
  }
  .icon-add {
    width: 12px;
    height: 12px;
  }
  .icon-add::before,
  .icon-add::after {
    width: 14px;
  }
   .elements-header {
    justify-content: space-between;
  }
}

@media (max-width: 420px) {
  .container {
    margin-bottom: 30px;
  }
  h1 {
    font-size: 1.75rem;
  }
  .icon-add {
    width: 12px;
    height: 12px;
  }
  .icon-add::before,
  .icon-add::after {
    width: 13px;
    height: 3px;
  }
}
</style>
