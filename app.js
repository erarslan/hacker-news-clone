import RouterHandler from "./router.js";

window.onhashchange = () => {
  setActiveLink();
};

function setActiveLink() {
  const links = document.querySelectorAll(".header-link");
  links.forEach((link) => {
    const path = link.getAttribute("href");
    const currentPath = window.location.hash;
    if (path === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

class App {
  constructor() {
    new RouterHandler();
  }
}

new App();
