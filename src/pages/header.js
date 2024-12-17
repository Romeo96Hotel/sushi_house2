import logo from "../assets/logo.png";

const headerEl = function () {
  const header = document.createElement("header");
  header.setAttribute("id", "header");

  const textContainer = document.createElement("div");
  textContainer.setAttribute("id", "header-text-container");

  const headerText = document.createElement("h1");
  headerText.setAttribute("id", "header-text");
  headerText.textContent = "Sushi House";

  const logoElement = document.createElement("img");
  logoElement.src = logo;
  logoElement.width = 50;
  logoElement.height = 50;

  header.appendChild(textContainer);
  textContainer.appendChild(headerText);
  textContainer.appendChild(logoElement);

  const menuContainer = document.createElement("ul");
  menuContainer.setAttribute("id", "header-menu-container");

  const homePage = document.createElement("li");
  homePage.textContent = "Home";
  homePage.setAttribute("id", "home-page-li");

  const menuPage = document.createElement("li");
  menuPage.textContent = "Menu";
  menuPage.setAttribute("id", "menu-page-li");

  const aboutPage = document.createElement("li");
  aboutPage.textContent = "About";
  aboutPage.setAttribute("id", "about-page-li");

  menuContainer.appendChild(homePage);
  menuContainer.appendChild(menuPage);
  menuContainer.appendChild(aboutPage);

  header.appendChild(menuContainer);

  return header;
};

export default headerEl;
