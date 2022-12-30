import express from "express";
import compression from "compression";
import dotenv from "dotenv";
import helmet from "helmet";

import { error404, error500 } from "./errors";
import { morganMiddleware } from "./logger";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// https://expressjs.com/en/advanced/best-practice-performance.html#use-gzip-compression
app.use(compression());

// https://expressjs.com/en/resources/middleware/morgan.html
app.use(morganMiddleware);

// https://expressjs.com/en/advanced/best-practice-security.html#use-helmet
app.use(helmet());
app.disable("x-powered-by");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// 404 & error handlers
app.use(error404);
app.use(error500);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
