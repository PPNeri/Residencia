const Sequelize=require('sequelize');

const dbconfig = new Sequelize('post','postgres','01123581321',{
    host:'localhost',
    port:'5432',
    dialect:'postgres'
});


dbconfig.authenticate().then(function(){

    console.log("Conectado ao banco Postgres com Sucesso")
}).catch(function(erro){
    console.log("Falha ao se Conectar"+erro)
})



module.exports=dbconfig;