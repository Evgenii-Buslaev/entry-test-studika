import { menuBtn, closeBtn, toggler } from "./scripts/toggleMenu.js";
import { citiesFetching } from "./scripts/get-cities.js";

menuBtn.addEventListener("click", toggler);
closeBtn.addEventListener("click", toggler);

/* const cities = citiesFetching(); */
