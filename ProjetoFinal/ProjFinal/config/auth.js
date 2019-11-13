const localStrategy=require('passport-local').Strategy
const connection=require('../models/database');
//require('mysql2')
const bcrypt=require('bcryptjs')
//require('../models/Corretores')
//require('../controllers/CorretoresController')
const corretor=require('../models/Corretores')

module.exports=function(passport){


passport.use(new localStrategy({
    usernameField:"email",passwordField:"senha"},(email,senha,done)=>{
        corretor.findOne({email:email}).then((corretor)=>{
            if(!corretor){
                return done(null,false,{message:"Esta conta não existe"})
            }

            bcrypt.compare(senha,corretor.senha,(batem,erro)=>{
                if(batem){
                    return done(null,corretor)

                }else{
                    return done(null,false,{message:"Senha incorreta"})
                }
            })
        })
    }))

passport.serializeUser((corretor,done)=>{
    done(null,corretor.cpf)
})

passport.deserializeUser((cpf,done)=>{
    corretor.findById(cpf,(err,corretor)=>{
        done(err,corretor)
    })
})
 

} 