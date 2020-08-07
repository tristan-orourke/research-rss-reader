import Parser from "rss-parser";

// Note: some RSS feeds can't be loaded in the browser due to CORS security.
// To get around this, you can use a proxy.
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

export async function fetchRssFeeds(feedUrls) {
  const parser = new Parser();
  const fetchPromises = feedUrls.map(url => parser.parseURL(CORS_PROXY + url));
  // Promise.allSettled resolves to an array of objects like {status: "fulfilled"|"rejected", value:any}
  const results = await Promise.allSettled(fetchPromises);
  return results.reduce((items, result) => {
    if (result.status === "fulfilled") {
      items.push(result.value);
    } else {
      console.log(result.value);
    }
    return items;
  }, []);
}

export function reconcileItems(liveItems, savedItems) {
  const itemMap = new Map();
  
  // Map the live items by their url
  liveItems.forEach(item => {
    itemMap.set(item.link, item);
  });

  // Replace live items with corresponding saved items, and add saved items with no live equivalent.
  savedItems.forEach(item => {
    itemMap.set(item.link, item);
  });

  // Convert the map back to an array for returning.
  return Array.from(itemMap.values());
}