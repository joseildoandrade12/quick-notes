<script setup>
import CreateForm from "./elements/CreateForm.vue";
import Button from "./elements/Button.vue";
</script>

<template>
  <div class="container-modal">
    <CreateForm title="Title" height="50" limit="60" />
    <CreateForm title="Content" height="220" limit="400" />
    <Button content="Save" width="240" />
  </div>
</template>

<style scoped>
.container-modal {
  width: max-content;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-top: 36px;
  background-color: #fff;
  padding: 20px;
  border: 1px solid #111827;
  border-radius: 20px;
  position: absolute;
  right: 120px;
}
</style>
