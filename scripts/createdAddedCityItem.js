const createAddedCityItem = (data) => {
  const { name, id } = data;
  if (!name) return;

  const item = document.createElement("div");
  const text = document.createElement("p");
  const close = document.createElement("img");

  item.classList.add("added-item");
  item.setAttribute("id", id);

  text.classList.add("added-item-name");
  text.innerText = name;

  close.setAttribute("src", "../assets/close.png");
  close.classList.add("added-delete");

  item.appendChild(text);
  item.appendChild(close);

  return item;
};

export { createAddedCityItem };
