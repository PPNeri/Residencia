const Sequelize=require('sequelize');
const connection=require('./database');



const Corretores =connection.define('corretores',{
    cpf:{
        type:Sequelize.BIGINT,
        primaryKey:true,
        allowNull:false,
    },
    creci:{
        type:Sequelize.STRING,
        unique:true,
        allowNull:false

    },
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    dataNasc:{
        type:Sequelize.DATEONLY,
        allowNull:false
    },
    genero:{
        type:Sequelize.ENUM('M','F'),
        allowNull:true
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    senha:{
        type:Sequelize.STRING,
        allowNull:false 
    },
    img:{
        type:Sequelize.STRING,
        allowNull:true 
    },
    eAdmin:{
        type:Sequelize.INTEGER,
        allowNull:true,
        default:0
    }


});

module.exports=Corretores