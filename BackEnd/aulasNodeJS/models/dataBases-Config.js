//DataBasesConfig

const Sequelize=require('sequelize');//carregar modulo sequelize

//Conexão e criação de um banco de dados

const sequelize=new Sequelize('Teste','root','01123581321',{
    host:'localhost',
    dialect:'mysql'
});


module.exports={

    Sequelize:Sequelize,
    sequelize:sequelize
}