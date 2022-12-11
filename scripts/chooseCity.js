import List from "./Classes/List.js";
import { createAddedCityItem } from "./createdAddedCityItem.js";

const addedList = document.getElementById("added-cities");
const choosingContainer = document.getElementById("city-datalist");
const addedContainer = document.getElementById("added-cities");
const submitBtn = document.getElementById("submit-changes");

const chooseCity = (id) => {
  const added = List.addItem(id).map((city) => createAddedCityItem(city));
  console.log(added);
  addedList.replaceChildren(...added);

  if (added.length !== 0) {
    submitBtn.classList = "button-enabled";
  } else {
    submitBtn.classList = "button-disabled";
  }
};

export { choosingContainer, addedContainer, submitBtn, chooseCity };
