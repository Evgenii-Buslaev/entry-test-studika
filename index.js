import { menuBtn, closeBtn, toggler } from "./scripts/dynamic-styles.js";
import { citiesFetching } from "./scripts/get-cities.js";

console.log(toggler);
console.log(menuBtn);

menuBtn.addEventListener("click", toggler);
closeBtn.addEventListener("click", toggler);

/* const cities = citiesFetching(); */
