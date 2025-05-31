<script setup>
import Button from "./elements/Button.vue";
import IconGrid from "./elements/IconGrid.vue";
</script>

<template>
  <div class="container">
    <h1>Quick Notes</h1>
    <div class="elements-header">
      <IconGrid />
      <Button content="Create Note" width="268"><span class="icon-add"></span></Button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}

h1 {
  font-size: 3rem;
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
