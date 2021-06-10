import { isBrowser } from './common-helper';

export function getLocalStorage(key: string) {
  let item: any = [];

  if (isBrowser()) {
    const data = window.localStorage.getItem(key);
    if (data) {
      item = JSON.parse(data);
    }
  }

  return { item };
}

export function addLocalStorageArray(key: string, input: any) {
  let item = [];
  if (isBrowser()) {
    const data = window.localStorage.getItem(key);
    if (data) {
      item = JSON.parse(data);
    }
    item.push(input);
    // alert(input);
    localStorage.setItem(key, JSON.stringify(item));
  }
}

export function removeLocalStorageArray(key: string, index: number) {
  const { item } = getLocalStorage(key);
  item.splice(index, 1)
  localStorage.setItem(key, JSON.stringify(item));
}
