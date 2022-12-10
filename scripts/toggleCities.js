const chooseCityBtn = document.querySelector(".point-cont");
const chooseCityMob = document.querySelector(".city");

const cityWindow = document.querySelector(".city-list");

const toggleCityWindow = () => {
  let openned = true;
  return () => {
    if (openned) {
      cityWindow.style.opacity = "0";
      setTimeout(() => {
        cityWindow.style.display = "none";
      }, 500);
    } else {
      cityWindow.style.display = "flex";
      setTimeout(() => {
        cityWindow.style.opacity = "1";
      }, 0);
    }
    openned = !openned;
  };
};

const cityToggler = toggleCityWindow();

export { chooseCityBtn, chooseCityMob, cityToggler };
