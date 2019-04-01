import { Sequelize } from "sequelize-typescript";
// import { initProduct } from "./product";
// import { initManufacturer } from "./manufacturer";

const env = process.env.NODE_ENV || "development";
const config = require("../config")[env];
const url = config.url || process.env.DATABSE_CONNECTION_URI;

const sequelize = new Sequelize(
  url,
  {
    ...config,
    modelPaths: [__dirname + '/*.model.ts'],
    modelMatch: (filename: any, member: any) => {
      return filename.substring(0, filename.indexOf('.model')) === member.toLowerCase();
    },
  }
);

const db = {
  sequelize,
  Sequelize,
  // Manufacturer: initManufacturer(sequelize),
  // Product: initProduct(sequelize),
};

Object.values(db).forEach((model: any) => {
  if (model.associate) {
    model.associate(db);
  }
});

export default db;
