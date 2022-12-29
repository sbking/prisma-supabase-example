import express, { NextFunction, Request, Response } from "express";

const router = express.Router();

// custom 404
router.use((req, res, next) => {
  res.status(404).send("Not found");
});

// custom error handler
router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong");
});

export default router;
