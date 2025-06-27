<script setup>
import { reactive } from "vue";
import { usePropsNotes } from "@/composables/usePropsNotes";
import { newDate } from "@/utils/newDate";
import Button from "./elements/Button.vue";

const elementsNotes = reactive({
  title: "" || null,
  content: "" || null,
  date: String,
});

const { pushDataArray } = usePropsNotes();
elementsNotes.date = newDate();

function pushData() {
  const formater = elementsNotes.content.trim().length;
  if (elementsNotes.content !== null && formater) {
    pushDataArray(elementsNotes.title, elementsNotes.content, elementsNotes.date);
    elementsNotes.title = "";
    elementsNotes.content = "";
  }
}
</script>

<template>
  <div class="container-modal">
    <div class="container-form">
      <label for="title"> Title </label>
      <textarea id="title" v-model="elementsNotes.title" maxlength="40"></textarea>
      <label for="content"> Content </label>
      <textarea id="content" maxlength="300" v-model="elementsNotes.content"></textarea>
      <p class="message-error" v-show="!elementsNotes.content">This field must be used!</p>
    </div>
    <Button @click="pushData" content="Save" width="240" />
  </div>
</template>

<style scoped>
.container-modal {
  width: max-content;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-top: 24px;
  background-color: #fff;
  padding: 20px;
  border: 1px solid #111827;
  border-radius: 20px;
  position: absolute;
  top: 170px;
  right: 120px;
}
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
  width: 500px;
  outline: none;
  padding: 12px;
  font-size: 1.25rem;
  border: 1px solid #111827;
  margin-bottom: 36px;
  border-radius: 20px;
}

#title {
  height: 50px;
}
#content {
  height: 200px;
}

.message-error {
  color: tomato;
  margin-top: -30px;
  font-size: 0.875rem;
  margin-bottom: 14px;
}
</style>
