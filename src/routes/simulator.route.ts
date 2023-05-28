const router = require("express").Router();
import { postSimulatorToProfileController, getAllSimullatorController, getAllSimulatorForProfileController } from "../controllers/simulator/index";
import makeExpressCallback from "../express-callback/index";

router.get("/simulator", makeExpressCallback(getAllSimullatorController));
router.get("/simulator/:profileId", makeExpressCallback(getAllSimulatorForProfileController));
router.post("/simulator/:profileId", makeExpressCallback(postSimulatorToProfileController));


module.exports = router;
