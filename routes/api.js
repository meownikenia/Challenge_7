const express = require("express");
const router = express.Router();
//const middleware = require("../middleware/middleware");
const controllersGame = require("../controllers/controllers-game");

// endpoint user game
router.post(
    "/register",
    //middleware.checkFieldsPost,
    controllersGame.RegisterGame
  );
  router.post(
    "/login",
    //middleware.checkFieldsPost,
    controllersGame.Login
  );
module.exports = router;