import { Sequelize, Model } from "sequelize";
import User from "./user.model";
import Post from "./post.model";

export default class Comment extends Model {}

export function initComment(sequelize) {
  Comment.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    text: {
      type: Sequelize.STRING,
      allowNull: false
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  }, {
    sequelize,
    timestamps: true,
    underscored: true
  });

  Comment.belongsTo(User, { foreignKey: 'authorId' });
  Comment.belongsTo(Post);
}
