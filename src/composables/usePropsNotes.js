import { ref } from "vue";
const objData = ref([]);
const countId = ref(0);
export function usePropsNotes() {
  const pushDataArray = (title, content, date) => {
    objData.value.push({
      title,
      content,
      date,
      id: countId.value,
    });
    countId.value++;
  };
  return { objData, pushDataArray };
}
