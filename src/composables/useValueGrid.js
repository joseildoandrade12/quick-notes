import { ref } from "vue";
const numberGrid = ref(1);
export function useValueGrid(number) {
  if (number) numberGrid.value = number
  return { numberGrid };
}
