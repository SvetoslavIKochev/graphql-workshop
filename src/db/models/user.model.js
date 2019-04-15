import { Sequelize, Model } from 'sequelize';

export default class User extends Model {
  static existsById(id) {
    return User.count({
      where: {
        id
      }
    }).then(count => {
      return count !== 0;
    });
  }
}

export function initUser(sequelize) {
  User.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    age: Sequelize.INTEGER,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  }, { sequelize, timestamps: true, underscored: true });
}
