// querySelectorAll function
export function qsAll(selector, parent = document) {
  return [...parent.querySelectorAll(selector)];
}

// querySelector function
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
