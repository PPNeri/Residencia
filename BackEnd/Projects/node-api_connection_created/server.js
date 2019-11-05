
const express=require('express');// carrega o modulo do express
const app=express();//instacia uma variável app do modulo express
const mongoose=require('mongoose');//carrega o modulo do mangoose
const requireDir=require('require-dir');//Reegistrar todos o diretoris( NECESSÁRIO NPM INSTALL REQUIRE-DIR    )
requireDir("./src/models");




//require('./src/models')
mongoose.connect('mongodb://localhost:27017:27017/nodeapi',{useUnifiedTopology:true,useNewUrlParser:true});

const Product=mongoose.model('Product');


//Conecção com o mongo Mongodb esta se conectando com a porta 
app.listen(3001);



app.get("/",(req,res)=>{
    Product.create({
        title:'Aplle',
        description:'MacBook',
        url:'http://www.apple.com',
    });

    return res.send('Pagina inicial node-api');
})









/*
app.get('/',(req,res)=>{
    res.send('OPA ');
})
app.listen(3031);
*/
