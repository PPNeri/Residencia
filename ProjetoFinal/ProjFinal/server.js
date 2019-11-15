const express=require('express');
const handlebars=require('express-handlebars')
const bodyparser=require('body-parser')                                                
const app=express();
const routes=require('./Routes/routes')
const path=require('path');
const passport=require('passport')
const Corretores=require('./models/Corretores');
const Imoveis=require('./models/Imoveis')
const Users=require('./models/Users')
require('./helpers/eAdmin')

const session=require('express-session')
const flash =require('connect-flash')
require('./config/auth')(passport);
require('./models/database')//Conexao com banco de dados

const axios = require('axios')


//---------------------------------------------------------------------
//CONFIG SESSION + FLASH

app.use(session({
    secret:"corretor",
    resave:true,
    saveUninitialized:true
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

app.use((req,res,next)=>{
    res.locals.success_msg=req.flash('success_msg')//variaveis globais
    res.locals.error_msg=req.flash('error_msg')//variaveis locais
    res.locals.error=req.flash('error')
    res.locals.user=req.user || null;
    next()
    
})

//MIDLEWARE 


//Corretores.hasMany(Imoveis);

//Corretores.hasMany(Users);

//Atenção , para a criação de relacionamentos os mesmos devem vir antes das syncronizações
//Corretores.sync({force:true})
//Imoveis.sync({force:true})
//Users.sync({force:true})



//CONFIG BODY-PARSER
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());

//CONFIG HANDLEBARS
app.engine('handlebars',handlebars({defaultLayout:'main'}))
app.set('view engine','handlebars');

//CONFIG PATH
app.use(express.static(path.join(__dirname,"public")))
app.use(express.static(path.join(__dirname,"img")))


const bodyParser=require('body-parser');
app.use('/about',(req,res)=>{
    res.render('about')
})

app.use('/',routes);






//OUTRAS
const PORT=8089;
app.listen(PORT,(req,res)=>{
    console.log("Servidor Rodando na porta 8089");
    
})