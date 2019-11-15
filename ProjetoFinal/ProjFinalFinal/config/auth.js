const localStrategy=require('passport-local').Strategy
const bcrypt=require('bcryptjs')
const corretor=require('../models/Corretores')



module.exports=function(passport){


passport.use(new localStrategy({
    usernameField:'email',passwordField:'senha'},(email,senha,done)=>{
        corretor.findOne({where:{'email':email}}).then((corretor)=>{
            if(!corretor){
                return done(null,false,{message:"email inválido"})
            }

            bcrypt.compare(senha,corretor,(batem,erro)=>{
                if(batem){
                    console.log("Bateram a senha entrou!!!")
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
    
    corretor.findByPk(cpf,(err,corretor)=>{
        done(err,corretor)
    })
})
 

} 