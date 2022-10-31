export const createElementWithText = (element, elementType, text, parent) => {
  element = document.createElement(elementType);
  element.textContent = text;
  parent.appendChild(element);

  return element;
};
