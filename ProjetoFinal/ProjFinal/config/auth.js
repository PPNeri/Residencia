const localStrategy=require('passport-local').Strategy
const corretor=require('../models/Corretores')
const bcrypt=require('bcryptjs')
require('../config/dbConfig')

module.exports=function(passport){


passport.use(new localStrategy({usernameField:'email',passwordField:'senha'},(email,senha,done)=>{
        corretor.findOne({where:{'email':email}}).then((corretor)=>{
            if(!corretor){
                console.log("conta invalida")
                return done(null,false,{message:"Email inválido, esta conta não existe. Insira uma conta existente."})
            }

            bcrypt.compare(senha,corretor.senha,(erro,batem)=>{
                if(batem){
                    console.log("Bateu a senha")
                    return done(null,corretor)

                }else{

                    return done(null,false,{message:'Senha incorreta'})

                }
            })
        })
    }))



    passport.serializeUser((corretor,done)=>{
        console.log('serialized')
        done(null,corretor.cpf)
    })
    
    passport.deserializeUser((cpf,done)=>{
        console.log('deserialized')
        corretor.findByPk(cpf)
        .then(corretor => {
            console.log("Autenticado");
            done(null, corretor);
            
        })
        .catch(error => {
            console.log(error);
            done(error);
        });
    })

}