import List from "./Classes/List.js";
import { citiesFetching } from "./get-cities.js";
import { createCityItem } from "./createCityItem.js";

const datalist = document.getElementById("city-datalist");
const preloader = document.querySelector(".preloader");

const renderCities = () => {
  let regions = List.list;
  return async () => {
    if (!regions) {
      regions = await citiesFetching();

      const renderRegions = regions.map((elem) => createCityItem(elem.name));
      renderRegions.forEach((elem) => datalist.appendChild(elem));

      datalist.style.display = "flex";
      preloader.style.display = "none";
    } else {
      return cities;
    }
  };
};

const render = renderCities();

export { render };
