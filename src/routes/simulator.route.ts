const router = require("express").Router();
import { postSimulatorToProfileController, getAllSimullator, getAllSimulatorForProfile } from "../controllers/simulator/index";
import makeExpressCallback from "../express-callback/index";

router.post("/simulator", makeExpressCallback(postSimulatorToProfileController));
router.get("/simulator/", makeExpressCallback(getAllSimullator));
router.get("/simulator/", makeExpressCallback(getAllSimulatorForProfile));

module.exports = router;
