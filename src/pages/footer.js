const footerEl = function () {
  const footer = document.createElement("footer");
  footer.setAttribute("id", "footer");

  const footerText = document.createElement("p");
  footerText.innerHTML = "Sushi &#169;";
  footerText.setAttribute("id", "footer-text");
  footer.appendChild(footerText);

  return footer;
};

export default footerEl;
