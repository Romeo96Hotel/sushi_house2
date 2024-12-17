const homeEl = function () {
  const homeElement = document.createElement("section");
  homeElement.setAttribute("id", "home");

  const textEl = document.createElement("h2");
  textEl.textContent = "Sushi your way";

  homeElement.appendChild(textEl);

  return homeElement;
};

export default homeEl;
