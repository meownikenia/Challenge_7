module.exports = (sequelize, Sequelize) => {
  const usrGamehistory = sequelize.define("user_game_history", {
    history_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
     user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    time_stamp: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },

    result: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    score: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  });

  return usrGamehistory;
};
