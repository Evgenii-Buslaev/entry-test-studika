const body = document.querySelector("body");
const header = document.querySelector(".mob-header");
const menuBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close");
const menu = document.querySelector(".mobile-menu");

const toggleMenu = () => {
  let openned = false;
  return () => {
    if (openned) {
      menu.style.left = "-600px";
      body.style.backgroundColor = "#f1f1f1";
      header.style.display = "flex";
    } else {
      menu.style.left = 0;
      body.style.backgroundColor = "#313131b9";
      header.style.display = "none";
    }
    openned = !openned;
  };
};

const toggler = toggleMenu();

export { menuBtn, closeBtn, toggler };
