import { writable } from 'svelte/store';
import idbStorage from "../storage/idbStorage";

const storage = idbStorage();

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
