const Sequelize=require('sequelize');
const connection=require("./database")
const corretores=require('./Corretores')

const Imoveis=connection.define('imoveis',{

    tipo:{
        type:Sequelize.STRING,
        allowNull:false

    },
    cidade:{
        type:Sequelize.STRING,
        allowNull:false
    },
    endereco:{
        type:Sequelize.STRING,
        allowNull:false
    },
    cep:{
        type:Sequelize.INTEGER,
        allowNull:false,
        unique:true
    },
    banheiros:{
        type:Sequelize.INTEGER,
        allowNull:true
    },
    n_quartos:{
        type:Sequelize.INTEGER,
        allowNull:true
    },
    garagem:{
        type:Sequelize.STRING,
        allowNull:true
    },
    valor:{
        type:Sequelize.DECIMAL(10,2),
        allowNull:false
    },
    img1:{
        type:Sequelize.STRING,
        allowNull:true

    },
    img2:{
        type:Sequelize.STRING,
        allowNull:true

    },
    img3:{
        type:Sequelize.STRING,
        allowNull:true

    },

    corretor_cpf:{
        type:Sequelize.BIGINT,
        references: {
            model: corretores,
            key: 'cpf'
          }
        }
    

    


});

module.exports=Imoveis
