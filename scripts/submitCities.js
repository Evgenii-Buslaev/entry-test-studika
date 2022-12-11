import List from "./Classes/List.js";

const submitCities = () => {
  const added = JSON.stringify(List.getAdded());

  document.cookie = `cities=${added}`;
  console.log(document.cookie);

  // afterwords we're sending POST query to save cookie on server
};

export { submitCities };
