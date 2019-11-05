//Criação de tabelas

const db=require('./dataBases-Config');
const Corretor=require('./Corretores');

//Ciando atebela do banco de dados
const Imovel=db.sequelize.define('imoveis',{

    id:{
        type:db.Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },

    tipo:{
        type:db.Sequelize.STRING,
        allowNull:false

    },
    cidade:{
        type:db.Sequelize.STRING,
        allowNull:false
    },
    endereco:{
        type:db.Sequelize.STRING,
        allowNull:false
    },
    cep:{
        type:db.Sequelize.INTEGER,
        allowNull:false,
        unique:true
    },
    banheiros:{
        type:db.Sequelize.INTEGER,
        allowNull:true
    },
    nQuartos:{
        type:db.Sequelize.INTEGER,
        allowNull:true
    },
    garagem:{
        type:db.Sequelize.STRING,
        allowNull:true
    },
    valor:{
        type:db.Sequelize.DECIMAL(10,2),
        allowNull:false
    }


});


Imovel.belongsTo(Corretor);





//Só executar este comando uma unica vez , só serve para criar a tabela

Imovel.sync({force:true})

module.exports=Imovel;