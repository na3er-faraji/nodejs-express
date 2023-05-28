const router = require("express").Router();
import {
  getAllFavoriteController,
  getFavoriteForProfileController,
} from "../controllers/favorite/index";
import makeExpressCallback from "../express-callback/index";

router.get("/favorite", makeExpressCallback(getAllFavoriteController));
router.get(
  "/favorite/:profileId",
  makeExpressCallback(getFavoriteForProfileController)
);

module.exports = router;
