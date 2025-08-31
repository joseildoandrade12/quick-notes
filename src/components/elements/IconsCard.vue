<script setup>
const props = defineProps({
  idCard: Number,
});

function deleteItem() {
  const sectionNote = document.getElementById(props.idCard);
  localStorage.removeItem(props.idCard);
  sectionNote.remove();
}
</script>

<template>
  <div class="container-icons">
    <img src="/icons/delete.svg" class="icon-delete" @click="deleteItem" alt="delete icon" />
    <img src="/icons/edit.svg" class="icon-edit" alt="edit icon" />
  </div>
</template>

<style scoped>
img {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  cursor: pointer;
  padding: 2px;
  margin-right: 16px;
}
.icon-delete {
  background-color: #ef4444;
}
.icon-edit {
  background-color: #3b82f6;
}

@media (max-width: 450px) {
  img {
    margin-right: 12px;
  }
}
</style>
