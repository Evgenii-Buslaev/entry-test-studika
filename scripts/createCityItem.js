const createCityItem = (data) => {
  const { name, id } = data;
  if (!name) return;
  const item = document.createElement("div");
  const titleItem = document.createElement("p");

  item.classList.add("datalist-item");
  item.setAttribute("id", id);
  titleItem.classList.add("datalist-item-name");
  titleItem.innerText = name;
  titleItem.setAttribute("id", id);
  item.appendChild(titleItem);

  return item;
};

export { createCityItem };
