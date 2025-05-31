<script setup>
const props = defineProps({
  title: String,
  height: [Number, String],
  limit: [Number, String],
});
</script>

<template>
  <div class="container-form">
    <label :for="title"> {{ title }} </label>
    <textarea :style="{ height: height + 'px' }" :id="title" :maxlength="limit"></textarea>
  </div>
</template>

<style scoped>
.container-form {
  display: flex;
  flex-direction: column;
}
label {
  font-size: 2.25rem;
  margin-bottom: 36px;
  color: #111827;
}
textarea {
  resize: none;
  width: 580px;
  outline: none;
  padding: 12px;
  font-size: 1.25rem;
  border: 1px solid #111827;
  margin-bottom: 36px;
  border-radius: 20px;
}
</style>
