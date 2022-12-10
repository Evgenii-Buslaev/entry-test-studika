const API_URL = "https://studika.ru/api/areas";
const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
};

const citiesFetching = async () => {
  const response = await fetch(API_URL, options);
  const cities = await response.json();
  console.log(cities);
  return cities;
};

export { citiesFetching };
