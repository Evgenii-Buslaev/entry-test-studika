import { menuBtn, closeBtn, toggler } from "./scripts/toggleMenu.js";
import { render } from "./scripts/renderCities.js";

import {
  chooseCityBtn,
  chooseCityMob,
  cityToggler,
} from "./scripts/toggleCities.js";

import {
  choosingContainer,
  addedContainer,
  submitBtn,
  chooseCity,
} from "./scripts/chooseCity.js";

menuBtn.addEventListener("click", toggler);
closeBtn.addEventListener("click", toggler);

chooseCityBtn.addEventListener("click", cityToggler);
chooseCityMob.addEventListener("click", cityToggler);

chooseCityBtn.addEventListener("click", () => render());
chooseCityMob.addEventListener("click", () => render());

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
  if (e.target.classList.value === "button-enabled") console.log("submit");
});
