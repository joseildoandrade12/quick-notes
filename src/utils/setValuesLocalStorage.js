export default function setValuesLocalStorage(objectElements, id) {
  let objectElementsString = JSON.stringify(objectElements);
  localStorage.setItem(id, objectElementsString);
  localStorage.setItem("countId", id);
}
