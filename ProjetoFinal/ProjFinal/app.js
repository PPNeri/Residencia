
//CARREGANDO MODULOS INICIAIS   
const express=require('express');
const handlebars=require('express-handlebars');
const bodyParser=require('body-parser');
const app=express();
const admin=require('./routes/admin');//CARREGA AS ROTAS
const path=require('path')//CARREGA MODULO PATH PARA TRABALHAR COM DIRETORIOS
//const mongoose=require('mongoose');

//MODULOS EXTRAS


//CONFIGURAÇÕES

    //BODYPARSER
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());

    //HANDLEBARS
    app.engine('handlebars',handlebars({defaultLayout:'main'}))
    app.set('view engine','handlebars');

    //MONGOOSE  


//ARQUIVO DE ROTAS
//PUBLIC-ARQUIVOS ESTÁTICOS

app.use(express.static(path.join(__dirname +"/public")))//FALANDO QUE O DIRETORIO COM TODOS OS ARQUIVOS STATICOS ESTÃO NO DIRETORIO PUBLIC

app.get("/",(req,res)=>{
    res.render("index")
})



app.use(admin);

//OUTRAS
const PORT=8089;
app.listen(PORT,(req,res)=>{
    console.log("Servidor rodando");
    
})