import { Sequelize } from "sequelize";
import User, { initUser } from "./user.model";
import Post, { initPost } from "./post.model";
import Comment, { initComment } from "./comment.model";

const env = process.env.NODE_ENV || "development";
const config = require("../config")[env];
const url = config.url || process.env.DATABSE_CONNECTION_URI;

const sequelize = new Sequelize(
  url,
  {
    ...config,
    modelPaths: [__dirname + '/*.model.js'],
    modelMatch: (filename, member) => {
      return filename.substring(0, filename.indexOf('.model')) === member.toLowerCase();
    },
  }
);

initUser(sequelize);
initPost(sequelize);
initComment(sequelize);

const db = {
  sequelize,
  Sequelize,
  User: User,
  Post: Post,
  Comment: Comment
};

Object.values(db).forEach((model) => {
  if (model.associate) {
    model.associate(db);
  }
});

export default db;
