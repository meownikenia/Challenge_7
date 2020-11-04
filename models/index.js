const dbConfig = require("../config/db-config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

var db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.userGame = require("./user_game")(sequelize, Sequelize);
db.userGameBiodata = require("./user_game_biodata")(sequelize, Sequelize);
db.userGameHistory = require("./user_game_history")(sequelize, Sequelize);

db.userGameHistory.belongsTo(db.userGame, {
  foreignKey: {
    name: "username",
  },
});
db.userGameBiodata.belongsTo(db.userGame, {
  foreignKey: {
    name: "username",
  },
});

module.exports = db;
