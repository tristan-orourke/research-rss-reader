export default function memoryStorage() {
  // collection of currently subscribed RSS feeds
  const rssList = new Set();

  const savedItems = new Map();

  /**
   * @returns {string[]} The list of saved rss urls.
   */
  function feedList() {
    return [...rssList];
  }

  /**
   * Save a new rss feed.
   * @param {string} url Url of an rss feed.
   * @returns {boolean} True if a new feed was added, false if this feed was already saved.
   */
  function addFeed(url) {
    if (rssList.has(url)) {
      return false;
    } else {
      rssList.add(url);
      return true;
    }
  }

  /**
   * Delete an existing rss feed.
   * @param {string} url Url of an rss feed.
   * @return {boolean} True if this feed was deleted, false if it was not present already.
   */
  function deleteFeed(url) {
    if (rssList.has(url)) {
      rssList.delete(url);
      return true;
    } else {
      return false;
    }
  }

  /**
   * Permanently save an rss item, along with custom tags.
   * @param {string} feedUrl
   * @param {Object} item An rss item.
   * @param {string} item.link The url of the rss item.
   * @param {string[]} tags
   * @returns {boolean} True if the item was saved.
   */
  function saveItem(feedUrl, item, tags) {
    if (!savedItems.has(feedUrl)) {
      savedItems.set(feedUrl, new Map());
    }
    const itemUrl = item.link;
    const feedMap = savedItems.get(feedUrl);
    feedMap.set(item.link, {
      item,
      tags,
    });
    return true;
  }

  /**
   * Removes an item from savedItems.
   * @param {string} feedUrl
   * @param {string} itemUrl
   * @returns {boolean} True if the item was deleted. False if it did not exist.
   */
  function forgetItem(feedUrl, itemUrl) {
    if (savedItems.has(feedUrl)) {
      return savedItems.get(feedUrl).delete(itemUrl);
    }
    return false;
  }

  /**
   * Return a specific saved item with feedUrl and tags, or null if requested item is not saved.
   * @param {string} feedUrl
   * @param {string} itemUrl
   * @returns {Object|null}
   */
  function getSavedItem(feedUrl, itemUrl) {
    if (savedItems.has(feedUrl) && savedItems.get(feedUrl).has(itemUrl)) {
      return {
        ...savedItems.get(feedUrl).get(itemUrl),
        feedUrl,
      };
    }
    return null;
  }

  /**
   * Returns a list of saved rss items, along with their feedUrl and tags.
   */
  function getSavedItems() {
    let items = [];
    for (let [feedUrl, feedItems] of savedItems.entries()) {
      for (let item of feedItems.values()) {
        items.push({
          ...item,
          feedUrl: feedUrl,
        });
      }
    }
    return items;
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
