const router = require("express").Router();
import { getAllProfileController, postProfileController } from "../controllers/profile/index";
import makeExpressCallback from "../express-callback/index";

router.get("/profile", makeExpressCallback(getAllProfileController));
router.post("/profile/", makeExpressCallback(postProfileController));

module.exports = router;
