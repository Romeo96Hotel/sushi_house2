//Renders home page elements
const firstLoad = function (header, home, footer) {
  const content = document.getElementById("content");
  content.appendChild(header);
  content.appendChild(home);
  content.appendChild(footer);
};

export default firstLoad;
