import List from "./Classes/List.js";
import { citiesFetching } from "./fetchCities.js";
import { createCityItem } from "./createCityItem.js";

const datalist = document.getElementById("city-datalist");
const preloader = document.querySelector(".preloader");

const renderCities = () => {
  let regions = List.list;
  return async () => {
    if (!regions) {
      regions = await citiesFetching();
      const cities = regions.map((elem) => elem.cities || []).flat();
      const allCities = List.defineList([...regions, ...cities]);

      const renderAllCities = allCities.map((elem) => createCityItem(elem));
      renderAllCities.forEach((elem) => datalist.appendChild(elem));

      datalist.style.display = "flex";
      preloader.style.display = "none";
    } else {
      return regions;
    }
  };
};

const render = renderCities();

export { render };
