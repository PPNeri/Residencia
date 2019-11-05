//Criação de tabelas

const db=require('./dataBases-Config');

//Ciando a tebela do banco de dados
const User=db.sequelize.define('usuarios',{

    login:{
        type:db.Sequelize.STRING,


    },
    senha:{
        type:db.Sequelize.STRING
    }


});








//Só executar este comando uma unica vez , só serve para criar a tabela
//User.sync({force:true})

module.exports=User;