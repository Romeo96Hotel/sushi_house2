import chefImg from "../assets/sushi_chef.jpg";

const aboutEl = function () {
  const content = document.createElement("section");
  content.setAttribute("id", "about-container");

  const aboutText = document.createElement("h2");
  aboutText.setAttribute("id", "about-text");
  aboutText.textContent =
    "At Sushi house, we take pride in serving sushi that’s fresh.";

  const aboutImg = document.createElement("img");
  aboutImg.src = chefImg;
  aboutImg.height = 200;
  aboutImg.width = 150;

  content.appendChild(aboutText);
  content.appendChild(aboutImg);

  return content;
};

export default aboutEl;
