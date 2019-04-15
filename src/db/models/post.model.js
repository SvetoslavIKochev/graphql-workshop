import { Sequelize, Model, Op } from "sequelize";
import User from "./user.model";

export default class Post extends Model {
  static findByTitleOrBody(query) {
    return Post.findAll({
      where: {
        [Op.or]: [
          {
            title: {
              [Op.iLike]: `%${ query.toLowerCase() }%`
            }
          },
          {
            body: {
              [Op.iLike]: `%${ query.toLowerCase() }%`
            }
          }
        ]
      }
    })
  }
}

export function initPost(sequelize) {
  Post.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    body: {
      type: Sequelize.STRING,
      allowNull: false
    },
    published: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  }, {
    sequelize,
    timestamps: true,
    underscored: true
  });

  Post.belongsTo(User, { foreignKey: 'authorId' });
}
