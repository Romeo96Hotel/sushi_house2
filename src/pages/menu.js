const menuEl = function () {
  const content = document.createElement("section");
  content.setAttribute("id", "menu");

  const foodMenu = document.createElement("ul");
  foodMenu.id = "food-menu-list";

  const listHeader = document.createElement("li");
  listHeader.textContent = "Food";
  listHeader.className = "menu-header";

  const li1 = document.createElement("li");
  li1.textContent = "California Roll";
  li1.className = "menu-li";

  const li2 = document.createElement("li");
  li2.textContent = "Spicy Tuna Roll";
  li2.className = "menu-li";

  const li3 = document.createElement("li");
  li3.textContent = "Dragon Roll";
  li3.className = "menu-li";

  const li4 = document.createElement("li");
  li4.textContent = "Rainbow Roll";
  li4.className = "menu-li";

  const li5 = document.createElement("li");
  li5.textContent = "Salmon Avocado Roll";
  li5.className = "menu-li";

  foodMenu.appendChild(listHeader);
  foodMenu.appendChild(li1);
  foodMenu.appendChild(li2);
  foodMenu.appendChild(li3);
  foodMenu.appendChild(li4);
  foodMenu.appendChild(li5);

  const nonAlcoholicMenu = document.createElement("ul");
  nonAlcoholicMenu.id = "non-alcoholic-list";

  const nonAlcoholicHeader = document.createElement("li");
  nonAlcoholicHeader.textContent = "Non-Alcohlic Drinks";
  nonAlcoholicHeader.className = "menu-header";

  const nonAlcoholic1 = document.createElement("li");
  nonAlcoholic1.textContent = "Green Tea";
  nonAlcoholic1.className = "menu-li";

  const nonAlcoholic2 = document.createElement("li");
  nonAlcoholic2.textContent = "Ramune Soda";
  nonAlcoholic2.className = "menu-li";

  const nonAlcoholic3 = document.createElement("li");
  nonAlcoholic3.textContent = "Calpico Water";
  nonAlcoholic3.className = "menu-li";

  const nonAlcoholic4 = document.createElement("li");
  nonAlcoholic4.textContent = "Matcha Latte";
  nonAlcoholic4.className = "menu-li";

  const nonAlcoholic5 = document.createElement("li");
  nonAlcoholic5.textContent = "Yuzu Lemonade";
  nonAlcoholic5.className = "menu-li";

  nonAlcoholicMenu.appendChild(nonAlcoholicHeader);
  nonAlcoholicMenu.appendChild(nonAlcoholic1);
  nonAlcoholicMenu.appendChild(nonAlcoholic2);
  nonAlcoholicMenu.appendChild(nonAlcoholic3);
  nonAlcoholicMenu.appendChild(nonAlcoholic4);
  nonAlcoholicMenu.appendChild(nonAlcoholic5);

  const alcoholicMenu = document.createElement("ul");
  alcoholicMenu.id = "alcoholic-list";

  const alcoholicHeader = document.createElement("li");
  alcoholicHeader.textContent = "Alcoholic Drinks";
  alcoholicHeader.className = "menu-header";

  const alcoholic1 = document.createElement("li");
  alcoholic1.textContent = "Sake";
  alcoholic1.className = "menu-li";

  const alcoholic2 = document.createElement("li");
  alcoholic2.textContent = "Shochu";
  alcoholic2.className = "menu-li";

  const alcoholic3 = document.createElement("li");
  alcoholic3.textContent = "Umeshu (Plum Wine)";
  alcoholic3.className = "menu-li";

  const alcoholic4 = document.createElement("li");
  alcoholic4.textContent = "Japanese Whisky";
  alcoholic4.className = "menu-li";

  const alcoholic5 = document.createElement("li");
  alcoholic5.textContent = "Yuzu Sake";
  alcoholic5.className = "menu-li";

  alcoholicMenu.appendChild(alcoholicHeader);
  alcoholicMenu.appendChild(alcoholic1);
  alcoholicMenu.appendChild(alcoholic2);
  alcoholicMenu.appendChild(alcoholic3);
  alcoholicMenu.appendChild(alcoholic4);
  alcoholicMenu.appendChild(alcoholic5);

  content.appendChild(foodMenu);
  content.appendChild(nonAlcoholicMenu);
  content.appendChild(alcoholicMenu);

  return content;
};

export default menuEl;
