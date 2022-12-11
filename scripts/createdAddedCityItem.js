const createAddedCityItem = (data) => {
  const { name, id } = data;
  if (!name) return;

  const item = document.createElement("div");

  item.classList.add("added-item");
  item.setAttribute("id", id);
  item.innerText = name;

  return item;
};

export { createAddedCityItem };
