module.exports={
    eAdmin:function(req,res,next){

        if(req.isAuthenticated() && req.user.eAdmin==0 ){
            return next();
        }
        req.flash("erro_msg","Você deve estar logado para entrar aqui ")
        res.redirect("/login")
        

    }
}