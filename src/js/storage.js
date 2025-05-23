export function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getData(key) {
  return JSON.parse(localStorage.getItem(key)) || null;
}

export function clearData(key) {
  localStorage.removeItem(key);
}
