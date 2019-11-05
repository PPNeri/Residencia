//Configurações iniciais

const express=require('express');//Instala o modulo express e retorna para a variavel express
const app=express();//cria uma instancia express
const handlebars=require('express-handlebars')//Carrega o modulo express-handlebars
const User=require('./models/User');//Carrega o módulo Usuario


//Config do engine template handlebars
//Aqui eu digo como utilizar o handlebars como engine do projeto

app.engine('handlebars',handlebars({defaultLayout:'main'}))//-Main é o template padãro da aplicação
app.set('view engine','handlebars');



//Carregando o modulo body-Parser para receber dados de todos os forms

const bodyParser=require('body-parser');

//Config body-parser------------------------------------------------

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());


//Criação de Routers-----------------------------------------------
//---rendereiza o formulario na tela

app.get('/formulario',function(req,res){
    res.render('formulario')
});

//Criando um usuário
//Insere os campos na tabela User

app.get('/form',function(req,res){
    res.render('formulario')
})

//Inserindo dados no banco de dados
app.post('/add',function(req,res){

    User.create({

        login:req.body.login,
        senha:req.body.senha

}).then(function(){
    res.send("Usuário Criado com sucesso!")
}).catch(function(erro){
    res.send("Ops! Houve um erro"+erro)
})
    

})

//configuração de porta
app.listen(8180);