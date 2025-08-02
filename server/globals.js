// globals.js
const store = {};

export function set(key, value) {
  store[key] = value;
}

export function get(key) {
  return store[key];
}

export function unset(key) {
  delete store[key];
}
