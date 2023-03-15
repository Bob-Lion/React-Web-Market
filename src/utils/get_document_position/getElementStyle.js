export function getElementHeight(elem) {
  return Number(window.getComputedStyle(elem).height.slice(0, -2));
}

export function getElementWidth(elem) {
  return Number(window.getComputedStyle(elem).width.slice(0, -2));
}
