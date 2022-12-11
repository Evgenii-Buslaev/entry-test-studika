import {
  menuBtn,
  closeBtn,
  toggler,
} from "./scripts/ui_handlers/toggleMenu.js";
import { input, clearInput, render } from "./scripts/renderCities.js";

import {
  chooseCityBtn,
  chooseCityMob,
  cityToggler,
} from "./scripts/ui_handlers/toggleCities.js";

import {
  choosingContainer,
  addedContainer,
  submitBtn,
  chooseCity,
} from "./scripts/chooseCity.js";

import { submitCities } from "./scripts/submitCities.js";

menuBtn.addEventListener("click", toggler);
closeBtn.addEventListener("click", toggler);

chooseCityBtn.addEventListener("click", cityToggler);
chooseCityMob.addEventListener("click", cityToggler);

chooseCityBtn.addEventListener("click", () => render());
chooseCityMob.addEventListener("click", () => render());

input.addEventListener("input", (e) => {
  render("filter", e.target.value);
  if (e.target.value !== "") {
    clearInput.style.visibility = "visible";
  } else {
    clearInput.style.visibility = "hidden";
  }
});
clearInput.addEventListener("click", () => {
  input.value = "";
  clearInput.style.visibility = "hidden";

  render("filter", "");
});

choosingContainer.addEventListener("click", (e) => {
  console.log(e.target);
  if (
    e.target.className === "datalist-item" ||
    e.target.className === "datalist-item-name" ||
    e.target.className === "added-item" ||
    e.target.className === "added-item-text"
  ) {
    chooseCity(e.target.id);
  }
});

addedContainer.addEventListener("click", (e) => {
  if (e.target.className === "added-delete") {
    chooseCity(e.target.parentNode.id);
  }
});

submitBtn.addEventListener("click", (e) => {
  if (e.target.classList.value === "button-enabled") {
    submitCities();
    cityToggler();
  }
});
