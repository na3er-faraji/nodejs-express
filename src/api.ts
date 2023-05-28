import express from "express";
import compression from 'compression';
import CONFIG from "./config/environment";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from 'helmet';
import swaggerUi from "swagger-ui-express";
import { connectToDatabase } from "./models";
import logger from './config/winston';
const swaggerDocument = require("../swagger.json");

connectToDatabase();

const app = express();
app.use(compression())
app.use(cors({ origin: CONFIG.crosOrigin }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet())
app.disable('x-powered-by')

// Routes
app.use("/api", require("./routes/favorite.route"));
app.use("/api", require("./routes/profile.route"));
app.use("/api", require("./routes/simulator.route"));

app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// custom error handler
app.use((err, req, res, next) => {
  logger.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(CONFIG.port, () =>
  logger.info(`✅Ready on port http://localhost:${CONFIG.port}`)
);
