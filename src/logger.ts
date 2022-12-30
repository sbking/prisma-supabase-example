import morgan from "morgan";
import winston from "winston";

const { combine, timestamp, json } = winston.format;

// https://expressjs.com/en/advanced/best-practice-performance.html#do-logging-correctly
export const logger = winston.createLogger({
  level: "http",
  format: combine(timestamp(), json()),
  transports: [new winston.transports.Console()],
});

// Configure Morgan to log http requests to winston
export const morganMiddleware = morgan(
  function (tokens, req, res) {
    return JSON.stringify({
      method: tokens.method(req, res),
      url: tokens.url(req, res),
      status: Number.parseInt(tokens.status(req, res)!),
      content_length: Number.parseInt(tokens.res(req, res, "content-length")!),
      response_time: Number.parseFloat(tokens["response-time"](req, res)!),
    });
  },
  {
    stream: {
      write: (message) => {
        logger.http(`incoming-request`, JSON.parse(message));
      },
    },
  }
);
