import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// https://expressjs.com/en/advanced/best-practice-security.html#use-helmet
app.use(helmet());
app.disable("x-powered-by");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
