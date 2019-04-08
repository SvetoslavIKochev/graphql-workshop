import { Sequelize } from "sequelize";
import { initUser } from "./user.model";

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

const db = {
  sequelize,
  Sequelize,
  User: initUser(sequelize)
  // Manufacturer: initManufacturer(sequelize),
  // Product: initProduct(sequelize),
};

Object.values(db).forEach((model) => {
  if (model.associate) {
    model.associate(db);
  }
});

export default db;
