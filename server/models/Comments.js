module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define("comments", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CommentBody: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Comments;
};
