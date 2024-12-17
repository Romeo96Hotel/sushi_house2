import "./styles/home.css";
import firstLoad from "./functions/firstload";
import headerEl from "./pages/header";
import footerEl from "./pages/footer";
import homeEl from "./pages/home";
import pageLoad from "./functions/pageload";
import menuEl from "./pages/menu";
import aboutEl from "./pages/about";

if (
  document.addEventListener("DOMContentLoaded", () => {
    firstLoad(headerEl(), homeEl(), footerEl());

    const homePageButton = document.querySelector("#home-page-li");
    const menuPageButton = document.querySelector("#menu-page-li");
    const aboutPageButton = document.querySelector("#about-page-li");

    homePageButton.addEventListener("click", () => {
      pageLoad(homeEl());

      const footer = footerEl();
      const content = document.getElementById("content");

      content.appendChild(footer);
    });
    menuPageButton.addEventListener("click", () => {
      pageLoad(menuEl());

      const footer = footerEl();
      const content = document.getElementById("content");

      content.appendChild(footer);
    });
    aboutPageButton.addEventListener("click", () => {
      pageLoad(aboutEl());

      const footer = footerEl();
      const content = document.getElementById("content");

      content.appendChild(footer);
    });
  })
);
