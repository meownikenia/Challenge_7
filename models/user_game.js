var bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, Sequelize) => {
  const usrGame = sequelize.define("user_game", {
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true    
 },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  usrGame.beforeSave((user, options) => {
    if (user.changed('password')) {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    }
  });
  usrGame.prototype.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
  };

  return usrGame;
};
