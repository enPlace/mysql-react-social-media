module.exports = (sequelize, DataTypes) => {
  return sequelize.define("backendzzz", {
    identifier: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
