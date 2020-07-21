import { openDB } from 'idb';
import eq from "lodash/eq";

export default function idbStorage() {

  const ITEM_STORE = 'items';
  const FEED_STORE = 'feeds';

  /**
   * Returns a Promise resolving to the db object.
   */
  function getDb() {
    return openDB("rss", 1, {
      upgrade(db) {
        // Create a store of rss items. Each rss item must contain `link` and `feedUrl` properties.
        const store = db.createObjectStore(ITEM_STORE, {
          keyPath: 'link',
        });
        store.createIndex('feedUrl', 'feedUrl');

        // Create a store for the subscribed feeds
        db.createObjectStore(FEED_STORE, {
          keyPath: "feedUrl"
        });
      }
    });
  }

  /**
   * @returns {Promise<string[]>} The list of saved rss urls.
   */
  async function feedList() {
    const db = await getDb();
    const feedObjs = await db.getAll(FEED_STORE);
    return feedObjs.map(x => x.feedUrl);
  }

  /**
   * Save a new rss feed.
   * @param {string} url Url of an rss feed.
   * @returns {Promise<boolean>} True if a new feed was added, false if this feed was already saved.
   */
  async function addFeed(url) {
    const tx = (await getDb()).transaction(FEED_STORE, "readwrite");
    const feed = await tx.store.get(url);
    // feed will be undefined if the url is not yet in the store
    if (feed === undefined) {
      const newFeed = {
        feedUrl: url
      };
      tx.store.put(newFeed);
      return true;
    } else {
      return false;
    }
  }

  /**
   * Delete an existing rss feed.
   * @param {string} url Url of an rss feed.
   * @return {Promise<boolean>} True if this feed was deleted, false if it was not present already.
   */
  async function deleteFeed(url) {
    const tx = (await getDb()).transaction(FEED_STORE, "readwrite");
    const feed = await tx.store.get(url);
    // feed will be undefined if the url does not exist in the store.
    if (feed === undefined) {
      return false;
    } else {
      tx.store.delete(url);
      return true;
    }
  }

  /**
   * Permanently save an rss item, along with custom tags.
   * @param {Object} item An rss item.
   * @param {string} item.link The url of the rss item.
   * @param {string} item.feedUrl The rss feed which is the source of this item.
   * @param {string[]} item.tags the tags saved to the rss item.
   * @returns {Promise<boolean>} Promise returning True if the item was saved or updated, False if item already exists exactly as is.
   */
  async function saveItem(item) {
    const tx = (await getDb()).transaction(ITEM_STORE, "readwrite");
    const oldItem = await tx.store.get(item.link);
    if (eq(oldItem, item)) {
      return false;
    }
    tx.store.put(item);
    return true;
  }

  /**
   * Removes an item from savedItems.
   * @param {string} feedUrl
   * @param {string} itemUrl
   * @returns {Promise<boolean>} True if the item was deleted. False if it did not exist.
   */
  async function forgetItem(itemUrl) {
    const tx = (await getDb()).transaction(ITEM_STORE, "readwrite");
    const item = await tx.store.get(itemUrl);
    // feed will be undefined if the url does not exist in the store.
    if (item === undefined) {
      return false;
    } else {
      tx.store.delete(itemUrl);
      return true;
    }
  }



  /**
   * Return a specific saved rss item, or null if requested item is not saved.
   * @param {string} itemUrl
   * @returns {Promise<any|null>} The saved rss item with specified url, or null if it doesn't exist.
   */
  async function getItem(itemUrl) {
    return (await getDb()).get(ITEM_STORE, itemUrl) || null;
  }

  /**
   * Returns a list of saved rss items, along with their feedUrl and tags.
   */
  async function getAllItems() {
    return (await getDb()).getAll(ITEM_STORE);
  }

  return {
    feedList,
    addFeed,
    deleteFeed,
    saveItem,
    forgetItem,
    getItem,
    getAllItems,
  };
}
