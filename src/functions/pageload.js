const pageLoad = function (page) {
  const contentElement = document.getElementById("content");

  if (contentElement.children.length < 1) {
    contentElement.appendChild();
  }

  while (contentElement.children.length > 1) {
    contentElement.removeChild(contentElement.lastChild);
  }

  contentElement.appendChild(page);
};

export default pageLoad;
