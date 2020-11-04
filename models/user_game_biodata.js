module.exports = (sequelize, Sequelize) => {
  const usrGamebiodata = sequelize.define("user_game_biodata", {
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true    
 },
    
    firstname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    mobilenumber: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  });

  return usrGamebiodata;
};
