import express from "express";
import { PORT, CORS_ORIGINS } from "./config";
import cors from "cors";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import { connectToDatabase } from './models';
const swaggerDocument = require("../swagger.json");

connectToDatabase();

const app = express();
app.use(cors({ origin: CORS_ORIGINS }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use("/api", require("./routes/favorite.route"));
app.use("/api", require("./routes/profile.route"));
app.use("/api", require("./routes/simulator.route"));

app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () =>
  console.log(`✅ Ready on port http://localhost:${PORT}`)
);
