import { checkEnvironment } from "../utils/environment";

// Import .env variables
require("dotenv").config();

// Config
const environment = checkEnvironment("ENVIRONEMT");
const PORT: number = parseInt(checkEnvironment("PORT"));
const DBURL: string = checkEnvironment("DBURL");
const CORS_ORIGINS = ["http://localhost:3000"];

export const CONFIG = {
  environment:  environment,
  port: PORT,
  dbUrl: DBURL,
  crosOrigin: CORS_ORIGINS,
  sentryDSN: process.env.SENTRY_DSN //is optional; 
};

export default CONFIG;
