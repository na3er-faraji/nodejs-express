import express from "express";
import { PORT, DBURL, CORS_ORIGINS } from "./config";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import  favoriteRouter  from "./services/favorite";
import profileRouter  from "./services/profile";
import simulatorRouter  from "./services/simulator";
import swaggerUi from "swagger-ui-express";
const swaggerDocument = require("../swagger.json");

mongoose
  .connect(`${DBURL}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Connected to DB ${DBURL}`);
  });

const app = express();
app.use(cors({ origin: CORS_ORIGINS }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(favoriteRouter);
app.use(profileRouter);
app.use(simulatorRouter);

app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () =>
  console.log(`✅  Ready on port http://localhost:${PORT}`)
);
