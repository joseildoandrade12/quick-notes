import { ref } from "vue";
const objData = ref([]);
export function usePropsNotes() {
  const pushDataArray = (title, content, date, id) => {
    objData.value.push({
      title,
      content,
      date,
      id,
    });
  };
  return { objData, pushDataArray };
}
