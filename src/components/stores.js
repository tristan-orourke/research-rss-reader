import { writable } from 'svelte/store';
import idbStorage from "../storage/idbStorage";

const storage = idbStorage();

function createFeeds() {
  const { subscribe, set } = writable([]);
  storage.feedList().then(set).catch(console.log);
  return {
    subscribe,
    add: async (url) => {
      const added = await storage.addFeed(url);
      if (added) {
        const rssList = await storage.feedList(); 
        set(rssList);
      }
    },
    delete: async (url) => {
      const removed = await storage.deleteFeed(url);
      if (removed) {
        const rssList = await storage.feedList();
        set(rssList);
      }
    }
  }
}
export const feeds = createFeeds();

function createSavedItems() {
  const {subscribe, set} = writable([]);
  storage.getAllItems().then(set).catch(console.log);
  return {
    subscribe,
    save: async (item) => {
      const saved = await storage.saveItem(item);
      if (saved) {
        const items = await storage.getAllItems();
        set(items);
      }
    },
    forget: async (itemUrl) => {
      const deleted = await storage.forgetItem(itemUrl);
      if (deleted) {
        const items = await storage.getAllItems();
        set(items);
      }
    }
  }
}
export const savedItems = createSavedItems();


export async function getItemTags(itemUrl) {
  const item = await storage.getItem(itemUrl);
  return item?.tags ?? [];
}
