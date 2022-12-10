import { menuBtn, closeBtn, toggler } from "./scripts/toggleMenu.js";
import { citiesFetching } from "./scripts/get-cities.js";

import {
  chooseCityBtn,
  chooseCityMob,
  cityToggler,
} from "./scripts/toggleCities.js";

menuBtn.addEventListener("click", toggler);
closeBtn.addEventListener("click", toggler);

chooseCityBtn.addEventListener("click", cityToggler);
chooseCityMob.addEventListener("click", cityToggler);

/* const cities = citiesFetching(); */
