const express=require('express');
const router=express.Router();

//CRIAÇÃO DAS FUNÇÕES DAS ROTAS

router.get('/',(req,res)=>{
    res.render("/admin/index")
})

router.get('/post',(req,res)=>{
    res.send("Pagina de posts")
})
router.get("/categorias",(req,res)=>{
    res.send("Pagina categorias")
})






//EXPORTAR O ROUTER O MÓDULO EXPORTS RECEBE O ROUTER
module.exports=router