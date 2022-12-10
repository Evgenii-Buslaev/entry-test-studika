import { citiesFetching } from "./get-cities";

const datalist = document.getElementById("city-datalist");
const preloader = document.querySelector(".preloader");

const renderCities = () => {
  const cities = [];
  return () => {
    if (!cities.length) {
      cities = citiesFetching();
    } else {
      return cities;
    }
  };
};

export { renderCities };
