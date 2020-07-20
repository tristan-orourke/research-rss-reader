import { openDB, deleteDB, wrap, unwrap } from 'idb';

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
    }
  }

  /**
   * @returns {Promise<string[]>} The list of saved rss urls.
   */
  async function feedList() {
    const db = await getDb();
    const feedObjs = await db.getAll(FEED_STORE);
    return feedObjs.map(x => f.feedUrl);
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
  function deleteFeed(url) {
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
   * @param {string} feedUrl
   * @param {Object} item An rss item.
   * @param {string} item.link The url of the rss item.
   * @param {string[]} tags
   * @returns {Promise<void>} True if the item was saved.
   */
  function saveItem(feedUrl, item, tags) {
  }

  /**
   * Removes an item from savedItems.
   * @param {string} feedUrl
   * @param {string} itemUrl
   * @returns {boolean} True if the item was deleted. False if it did not exist.
   */
  function forgetItem(feedUrl, itemUrl) {
  }

  /**
   * Return a specific saved item with feedUrl and tags, or null if requested item is not saved.
   * @param {string} feedUrl
   * @param {string} itemUrl
   * @returns {Object|null}
   */
  function getSavedItem(feedUrl, itemUrl) {
  }

  /**
   * Returns a list of saved rss items, along with their feedUrl and tags.
   */
  function getSavedItems() {
  }

  return {
    feedList,
    addFeed,
    deleteFeed,
    saveItem,
    forgetItem,
    getSavedItem,
    getSavedItems,
  };
}
