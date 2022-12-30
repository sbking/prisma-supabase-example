import { RequestHandler, ErrorRequestHandler } from "express";
import { logger } from "./logger";

// custom 404
export const error404: RequestHandler = (req, res, next) => {
  res.status(404).send("Not found");
};

// custom error handler
export const error500: ErrorRequestHandler = (err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send("Something went wrong");
};
