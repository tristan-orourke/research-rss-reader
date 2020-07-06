import polka from "polka";
import Parser from "rss-parser";
import { json as jsonParser } from "body-parser";

// collection of currently subscribed RSS feeds
const rssList = new Set();

// create new RSS parser
const parser = new Parser();

export function apiRouter() {
  const router = polka();
  router.use(jsonParser());

  router.post("add", (req, res) => {
    const { url } = req.body;
    if (rssList.has(url)) {
      res.end(JSON.stringify({ added: false, rssList: [...rssList] }));
      return;
    }

    rssList.add(url);
    res.end(JSON.stringify({ added: true, rssList: [...rssList] }));
  });
  router.post("del", (req, res) => {
    const { url } = req.body;
    console.log("removing url", url);
    if (!rssList.has(url)) {
      res.end(JSON.stringify({ removed: false, rssList: [...rssList] }));
      return;
    }

    rssList.delete(url);
    res.end(JSON.stringify({ removed: true, rssList: [...rssList] }));
  });
  router.get("list", (req, res) => {
    res.end(JSON.stringify(["hello", "jim"]));
    // res.end(JSON.stringify([...rssList]));
  });
  router.get("refresh", async (req, res, next) => {
    try {
      const result = [];
      for (const url of rssList) {
        const feed = await parser.parseURL(url);
        result.push(feed);
      }
      res.end(JSON.stringify(result));
    } catch (e) {
      next(e);
    }
  });

  return router;
}

export default apiRouter;
