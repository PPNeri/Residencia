
const dbConfig=require('../config/dbConfig')
const Sequelize=require('sequelize');

const connection=new Sequelize (dbConfig)


connection.authenticate().then(function(){

    console.log("Conectado ao banco Mysql com Sucesso")
}).catch(function(erro){
    console.log("Falha ao se Conectar"+erro)
})

module.exports=connection;
