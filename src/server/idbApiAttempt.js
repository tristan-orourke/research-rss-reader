import polka from "polka";
import Parser from "rss-parser";
import { json as jsonParser } from "body-parser";
import idbStorage from "../storage/idbStorage";

const storage = idbStorage();

// create new RSS parser
const parser = new Parser();

export function apiRouter() {
  const router = polka();
  router.use(jsonParser());

  router.post("add", async (req, res) => {
    const { url } = req.body;
    const added = await storage.addFeed(url);
    const rssList = await storage.feedList();
    res.end(JSON.stringify({ added, rssList }));
  });
  router.post("del", async (req, res) => {
    const { url } = req.body;
    const removed = await storage.deleteFeed(url);
    const rssList = await storage.feedList();
    res.end(JSON.stringify({ removed, rssList }));
  });
  router.get("list", async (req, res) => {
    const feedList = await storage.feedList();
    res.end(JSON.stringify(feedList));
  });
  router.get("refresh", async (req, res) => {
    const feeds = [];
    const errors = [];
    const items = await storage.feedList();
    for (const url of items) {
      try {
        const feed = await parser.parseURL(url);
        feeds.push(feed);
      } catch (e) {
        errors.push(`Failed to load ${url}`);
      }
    }
    res.end(JSON.stringify({ feeds, errors }));
  });

  router.post("items/save", async (req, res) => {
    const { item } = req.body;
    const saved = await storage.saveItem(item);
    const updatedItem = await storage.getItem(item.link);
    res.end(
      JSON.stringify({
        saved,
        savedItem: updatedItem
      })
    );
  });
  router.post("items/forget", async (req, res) => {
    const { itemUrl } = req.body;
    const deleted = await storage.forgetItem(itemUrl);
    const items = await storage.getAllItems();
    res.end(JSON.stringify({ deleted, items }));
  });
  router.get("items", async (req, res) => {
    const items = await storage.getAllItems();
    res.end(JSON.stringify({ items }));
  });

  return router;
}

export default apiRouter;
