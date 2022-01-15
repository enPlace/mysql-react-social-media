module.exports = (sequelize, DataTypes) => {
  const Backend = sequelize.define("backend", {
    identifier: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Backend;
};
