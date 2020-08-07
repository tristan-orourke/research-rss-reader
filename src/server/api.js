import polka from "polka";
import Parser from "rss-parser";
import { json as jsonParser } from "body-parser";
import memoryStorage from "../storage/memoryStorage";

const storage = memoryStorage();

// create new RSS parser
const parser = new Parser();

export function apiRouter() {
  const router = polka();
  router.use(jsonParser());

  router.post("add", (req, res) => {
    const { url } = req.body;
    const added = storage.addFeed(url);
    res.end(JSON.stringify({ added, rssList: storage.feedList() }));
  });
  router.post("del", (req, res) => {
    const { url } = req.body;
    const removed = storage.deleteFeed(url);
    res.end(JSON.stringify({ removed, rssList: storage.feedList() }));
  });
  router.get("list", (req, res) => {
    res.end(JSON.stringify(storage.feedList()));
  });
  router.get("refresh", async (req, res) => {
    const feeds = [];
    const errors = [];
    for (const url of storage.feedList()) {
      try {
        const feed = await parser.parseURL(url);
        feeds.push(feed);
      } catch (e) {
        errors.push(`Failed to load ${url}`);
      }
    }
    res.end(JSON.stringify({ feeds, errors }));
  });

  router.post("items/save", (req, res) => {
    const { feedUrl, item, tags } = req.body;
    const saved = storage.saveItem(feedUrl, item, tags);
    res.end(
      JSON.stringify({
        saved,
        savedItem: storage.getSavedItem(feedUrl, item.link),
      })
    );
  });
  router.post("items/forget", (req, res) => {
    const { feedUrl, itemUrl } = req.body;
    const deleted = storage.forgetItem(feedUrl, itemUrl);
    res.end(JSON.stringify({ deleted, savedItems: storage.getSavedItems() }));
  });
  router.get("items", (req, res) => {
    res.end(JSON.stringify(storage.getSavedItems()));
  });

  return router;
}

export default apiRouter;
