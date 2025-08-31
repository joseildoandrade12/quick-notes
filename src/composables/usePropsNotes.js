import { ref } from "vue";
import setValuesLocalStorage from "@/utils/setValuesLocalStorage";

const objData = ref([]);
const countId = ref(1);

if (localStorage.getItem("countId")) {
  countId.value = +localStorage.getItem("countId") + 1;
}

export function usePropsNotes() {
  const pushDataArray = (title, content, date) => {
    setValuesLocalStorage({ title, content, date }, countId.value);
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
