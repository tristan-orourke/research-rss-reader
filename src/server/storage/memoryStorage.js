export default function memoryStorage() {
  // collection of currently subscribed RSS feeds
  const rssList = new Set();

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

  return {
    feedList,
    addFeed,
    deleteFeed,
  };
}
