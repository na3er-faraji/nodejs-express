const router = require("express").Router();
import { getAllFavoriteController, getFavoriteByIdController } from "../controllers/favorite/index";
import makeExpressCallback from "../express-callback/index";

router.get("/favorite", makeExpressCallback(getAllFavoriteController));
router.get("/favorite/:id", makeExpressCallback(getFavoriteByIdController));

module.exports = router;
