const Sequelize=require('sequelize');//Importar ORM?? 

//Estabelecer uma conexão Instancio e passo parametros

const sequelize=new Sequelize('nodeMysqldb','root','01123581321',{
    host:"localhost",
    dialect:'mysql'
});

//Testando conexão com banco
/*
sequelize.authenticate().then(function(){
    console.log("Conectado com Sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar"+erro);
});
*/

//Criando as tabelas

//Criando tabela corretor

const Corretores =sequelize.define('corretores',{
    cpf:{
        type:Sequelize.BIGINT,
        primaryKey:true,
        allowNull:false,
    },
    creci:{
        type:Sequelize.BIGINT,
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
    }


});


const Imoveis=sequelize.define('imoveis',{

    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },

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
    nQuartos:{
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
    }
    


});

Corretores.hasMany(Imoveis);

//Sincronizar com o banco
//sequelize.sync({force:true});

//Corretores.sync({force:true});
//Imoveis.sync({force:true});


Corretores.create({
    cpf:'11143221729',
    creci:'11111100022',
    nome:'Paulo da Silva',
    dataNasc:'05/12/2016',
    genero:'M',
    email:'pauloneri@gmail.com'
})

Imoveis.create({
    corretoreCpf:'11143221720',
    cidade:'Petropolis',
    endereco:'Rua das acacias',
    cep:'25651030',
    banheiros:'2',
    tipo:'casa',
    nQuartos:'4',
    garagem:'nao',
    valor:'150000'


})
