const Sequelize = require('sequelize');
const ENV = process.env.NODE_ENV;
const config = require('./config.js').database[ENV];

const path = require('path');
const fs = require('fs');

let db = null;
let sequelize = null;

module.exports = (app) => {
  if (!db) {
    console.log("Instanciou sequelize");
    sequelize = new Sequelize(config.database, config.username, config.password, {
      host: config.host,
      dialect: config.dialect
    });
  }

  db = {
    sequelize,
    Sequelize
  };

  const dir = path.join(__dirname, "models");

  fs
    .readdirSync(dir)
    .forEach(function(file) {
      var model = sequelize.import(path.join(dir, file));
      db[model.name] = model;
    });

  Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
      db[modelName].associate(db);
    }
  });

  return db;
}
