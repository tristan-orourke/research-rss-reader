import sirv from "sirv";
import polka from "polka";
import compression from "compression";
import * as sapper from "@sapper/server";
import apiRouter from "./server/api";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

polka() // You can also use Express
  .use(compression({ threshold: 0 }))
  .use(sirv("static", { dev }))
  .get("/test", (req, res) => {
    res.end(JSON.stringify(["hello", "fanny"]));
  })
  .use("api", apiRouter())
  .use(sapper.middleware())
  .listen(PORT, (err) => {
    if (err) console.log("error", err);
  });
