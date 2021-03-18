const Sequelize = require("sequelize");

module.exports = function(sequelize,DataTypes){
    const Artikal = sequelize.define("artikal",{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        naziv:Sequelize.STRING,
        tip:Sequelize.STRING,
        cijena:Sequelize.INTEGER,
        stanjeUSkladistu:Sequelize.INTEGER
    })
    return Artikal;
};
