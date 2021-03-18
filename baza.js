const {Sequelize} = require("sequelize");
const path = require("path");
const sequelize = new Sequelize("optika", "root", "root", {
    host: "localhost",
    dialect: "mysql",
    logging: false,
});
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.artikal = require(path.join( __dirname, 'modeli/artikal.js'))(sequelize, Sequelize.DataTypes);


module.exports =db;