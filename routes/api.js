const express = require("express");
const router = express.Router();
//const middleware = require("../middleware/middleware");
const controllersGame = require("../controllers/controllers-game");
const controllerAdmin = require("../controllers/controller-admin");

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
  router.get("/players", controllerAdmin.getAllUserGame);
  router.get("/searchplayers", controllerAdmin.searchUserGame);
router.get(
  "/player/:id",
  //middleware.mustBeInteger,
  controllerAdmin.getOneUserGame
);
router.put("/player/:id", controllerAdmin.updateUserGame);
module.exports = router;