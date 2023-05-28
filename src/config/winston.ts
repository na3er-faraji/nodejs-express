import { json } from "body-parser";
import CONFIG from "./environment";
import winston from "winston";
const Sentry = require("winston-transport-sentry-node").default;

const logger = winston.createLogger({
  format: winston.format.json(),
  level: "info",
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.simple(),
        winston.format.timestamp(),
        winston.format.printf((info) => `[${info.level}] - ${info.message}`)
      ),
    
    }),
  ],
});

// Add the logger to Sentry only in production
if (CONFIG.environment === "production") {
  const options = {
    level: "info",
    sentry: {
      dsn: CONFIG.sentryDSN,
    },
  };

  logger.add(new Sentry(options));
}

export default logger;
