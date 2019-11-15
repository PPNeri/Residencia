const Sequelize=require('sequelize');
const connection=require('./database')


const Users =connection.define('users',{
    
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },

    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    senha:{

        type:Sequelize.STRING,
        allowNull:false,


    },
    eAdmin:{
        type:Sequelize.BOOLEAN,
        default:0
    }


});

module.exports=Users