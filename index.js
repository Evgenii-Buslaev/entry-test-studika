import { menuBtn, closeBtn, toggler } from "./scripts/toggleMenu.js";
import { citiesFetching } from "./scripts/fetchCities.js";
import { render } from "./scripts/renderCities.js";

import {
  chooseCityBtn,
  chooseCityMob,
  cityToggler,
} from "./scripts/toggleCities.js";

menuBtn.addEventListener("click", toggler);
closeBtn.addEventListener("click", toggler);

chooseCityBtn.addEventListener("click", cityToggler);
chooseCityMob.addEventListener("click", cityToggler);

chooseCityBtn.addEventListener("click", () => render());
chooseCityMob.addEventListener("click", () => render());

const cities = citiesFetching();
