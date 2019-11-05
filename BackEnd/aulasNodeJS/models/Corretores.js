//Criação de tabelas

const db =require('./dataBases-Config');
//const Imovel=require('./Imoveis');
//Ciando atebela do banco de dados
const Corretor=db.sequelize.define('corretores',{

    cpf:{
        type:db.Sequelize.BIGINT,
        primaryKey:true,
        allowNull:false,
    },
    creci:{
        type:db.Sequelize.BIGINT,
        unique:true,
        allowNull:false

    },
    nome:{
        type:db.Sequelize.STRING,
        allowNull:false
    },
    dataNasc:{
        type:db.Sequelize.DATEONLY,
        allowNull:false
    },
    genero:{
        type:db.Sequelize.ENUM('M','F'),
        allowNull:true
    },
    email:{
        type:db.Sequelize.STRING,
        allowNull:false,
        unique:true
    }



});

Corretor.hasMany(Imovel);






//Só executar este comando uma unica vez , só serve para criar a tabela
Corretor.sync({force:true})
module.exports=Corretor;