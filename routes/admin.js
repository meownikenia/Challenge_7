const express = require("express");
const router = express.Router();
//const middleware = require("../middleware/middleware");
const controllerAdmin = require("../controllers/controller-admin");

//router.get("/dashboard", controllerAdmin.viewDashboard);
//router.get("/signin", controllerAdmin.viewSignin);
// router.get("/dashboard", controllerAdmin.renderAllUserGame);

// endpoint user game
router.post(
  "/user_game",
  //middleware.checkFieldsPost,
  controllerAdmin.createUserGame
);
router.get("/user_game", controllerAdmin.getAllUserGame);
router.get(
  "/user_game/:id",
  //middleware.mustBeInteger,
  controllerAdmin.getOneUserGame
);
router.put("/user_game/:id", controllerAdmin.updateUserGame);
router.delete(
  "/user_game/:id",
  //middleware.mustBeInteger,
  controllerAdmin.deleteOneUserGame
);
router.delete("/user_game", controllerAdmin.deleteAllUserGame);

// endpoint user game history
router.post(
  "/user_game_history",
  //middleware.checkFieldsPostUserGameHistory,
  controllerAdmin.createUserGameHistory
);
router.get("/user_game_history", controllerAdmin.getAllUserGameHIstory);
router.get(
  "/user_game_history/:id",
  //middleware.mustBeInteger,
  controllerAdmin.getOneUserGameHistory
);
router.put("/user_game_history/:id", controllerAdmin.updateUserGameHistory);
router.delete(
  "/user_game_history/:id",
  //middleware.mustBeInteger,
  controllerAdmin.deleteOneUserGameHistory
);
router.delete("/user_game_history/", controllerAdmin.deleteAllUserGameHistory);

// endpoint user game biodata
router.post(
  "/user_game_biodata",
  //middleware.checkFieldsPostUserGameBiodata,
  controllerAdmin.createUserGameBiodata
);
router.get("/user_game_biodata", controllerAdmin.getAllUserGameBiodata);
router.get(
  "/user_game_biodata/:id",
  //middleware.mustBeInteger,
  controllerAdmin.getOneUserGameBiodata
);
router.put("/user_game_biodata/:id", controllerAdmin.updateUserGameBiodata);
router.delete(
  "/user_game_biodata/:id",
  controllerAdmin.deleteOneUserGameBiodata
);
router.delete("/user_game_biodata/", controllerAdmin.deleteAllUserGameBiodata);

module.exports = router;