module.exports={
    eAdmin:function(req,res,next){

        if(req.isAuthenticated() && req.user.eAdmin==1 ){
            console.log("Esta autenticado")
            return next();
        }
        req.flash("erro_msg","Você deve estar logado para entrar aqui ")
        res.redirect("/formLogin")
        

    }
}