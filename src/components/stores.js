import { writable } from 'svelte/store';

const itemTagMap = new Map();

export function getItemTags(itemUrl) {
  if (!itemTagMap.has(itemUrl)) {
    itemTagMap.set(itemUrl, writable([]));
  }
  return itemTagMap.get(itemUrl);
}