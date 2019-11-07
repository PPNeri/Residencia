
const express=require('express');

const Sequelize=require('sequelize');

const bodyParser=require('body-parser');

const app=express();

const cors=require('cors');

const User=require('./src/models/User');

const Post=require('./src/models/Post');

const requireDir=require('require-dir');//Reegistrar todos o diretorios( NECESSÁRIO NPM INSTALL REQUIRE-DIR    )

requireDir("./src/models");

app.use(express.json());

app.use(cors());//LIBERAÇÃO DE ACESSO

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

//BLOCO DE CONEXÃO SEQUELIZE COM POSTGREES

const dbconfig=require('./src/models/database');

app.use('/',require('./src/routes'));



User.hasMany(Post);//Cria automaticamente uma chave estrangeira


//User.sync({force:true});
//Post.sync({force:true});

app.listen(3001);
