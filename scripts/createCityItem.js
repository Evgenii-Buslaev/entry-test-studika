const createCityItem = (title) => {
  if (!title) return;
  const item = document.createElement("div");
  const titleItem = document.createElement("p");

  item.classList.add("datalist-item");
  titleItem.innerText = title;
  item.appendChild(titleItem);

  return item;
};

export { createCityItem };
