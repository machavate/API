const Sequelize = require('sequelize')

const db = new Sequelize("osmane","islands", "19821980@Islands", {
    host: 'localhost',
    dialect: 'mysql'
});

db.authenticate()
.then(function(){
     console.log("conexao realizada com sucesso");
}).catch(function(){
     console.log("Erro na conexao");
});
module.exports = db;