import polka from "polka";
import Parser from "rss-parser";
import { json as jsonParser } from "body-parser";
import memoryStorage from "./storage/memoryStorage";

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
    console.log("removing url", url);
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

  return router;
}

export default apiRouter;
