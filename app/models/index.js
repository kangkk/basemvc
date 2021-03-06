/**
 *
 */
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../../config/server-config');
const db = {};

/*
 * @param
 */
const sequelize = new Sequelize(config.db.database,config.db.user,config.db.password,config.db.other);

fs.readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== 'index.js'))
  .forEach((file) => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

module.exports = db;
