<script setup>
import { ref, reactive, onMounted } from "vue";
import { usePropsNotes } from "@/composables/usePropsNotes";
import { newDate } from "@/utils/newDate";
import Button from "./elements/Button.vue";

const emit = defineEmits(["toggle"]);
const activeError = ref(true);
const containerModal = ref(null);
const elementsNotes = reactive({
  title: null,
  content: null,
  date: String,
});

const { pushDataArray } = usePropsNotes();
elementsNotes.date = newDate();

function pushData() {
  if (!elementsNotes.content) {
    activeError.value = false;
  }

  if (elementsNotes.content) {
    activeError.value = true;
    const formater = elementsNotes.content.trim().length;
    if (formater) {
      pushDataArray(elementsNotes.title, elementsNotes.content, elementsNotes.date);
      elementsNotes.title = "";
      elementsNotes.content = "";
      emit("toggle");
    }
  }
}

defineExpose({ container: containerModal });
</script>

<template>
  <div ref="containerModal" class="container-modal">
    <div class="container-form">
      <label for="title"> Title </label>
      <textarea id="title" v-model="elementsNotes.title" maxlength="40"></textarea>
      <label for="content"> Content </label>
      <textarea id="content" maxlength="300" v-model="elementsNotes.content"></textarea>
      <p class="message-error" v-show="!activeError">This field must be used!</p>
    </div>
    <Button @click="pushData" content="Save" width="180" />
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
  top: 128px;
  right: 200px;
}
.container-form {
  display: flex;
  flex-direction: column;
}
label {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #111827;
}
textarea {
  resize: none;
  width: 440px;
  outline: none;
  padding: 12px;
  font-size: 1.175rem;
  border: 1px solid #111827;
  margin-bottom: 32px;
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

@media (max-width: 1060px) {
  .container-modal {
    right: 100px;
  }
}

@media (max-width: 870px) {
  .container-modal {
    right: 80px;
  }
}

@media (max-width: 720px) {
  .container-modal {
    top: 165px;
    right: 60px;
  }
  label {
    font-size: 1.5rem;
    margin-bottom: 16px;
  }
  textarea {
    font-size: 1rem;
    padding: 9px;
    margin-bottom: 24px;
  }
  #title {
    height: 40px;
  }
  .message-error {
    margin-top: -20px;
  }
}

@media (max-width: 580px) {
  label {
    font-size: 1.25rem;
    margin-bottom: 12px;
  }
  textarea {
    font-size: 1rem;
    padding: 13px;
    max-width: 280px;
    margin-bottom: 16px;
  }
  #title {
    height: 55px;
  }
  .message-error {
    margin-top: -15px;
  }
}

@media (max-width: 420px) {
  .container-modal {
    top: 140px;
    right: 20px;
  }
  textarea {
    max-width: 260px;
  }
}
</style>
