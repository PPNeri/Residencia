const express=require('express');
const router=express.Router();
const bcrypt=require('bcryptjs')
const bodyParser=require('body-parser')
const Corretor=require('../models/Corretores')
const Imovel=require('../models/Imoveis')
const CorretoresController=require('../controllers/CorretoresController')
const ImoveisController=require('../controllers/ImoveisControllers')
const session=require('express-session')
const flash =require('connect-flash')
const passport=require('passport')
require('../config/auth')(passport)
const {eAdmin}=require('../helpers/eAdmin')//Controle para administardores






router.get('/property-grid2',ImoveisController.listprop);

router.get('/list/corretor',CorretoresController.index);
router.get('/list/corretor/:cpf',CorretoresController.show);
router.post('/register/corretor',CorretoresController.create);

router.put('/update/corretor/:cpf',CorretoresController.update);

router.get('/update/corretor/:cpf',CorretoresController.editar);
router.post('/update/corretor/',CorretoresController.editado);




router.get('/delete/corretor/:cpf',CorretoresController.delete);
router.get('/list/corretores',CorretoresController.list);





router.get('/formImovel',ImoveisController.showForm);
router.post('/register/imovel',ImoveisController.create);
router.get('/list/imoveis',ImoveisController.list);
router.get('/list/imoveis/:id',ImoveisController.show);
router.get('/delete/imoveis/:id',ImoveisController.delete);


router.get('/update/imovel/:id',ImoveisController.editar);
router.post('/update/imovel/',ImoveisController.editado);

//CRIAÇÃO DAS FUNÇÕES DAS ROTAS


router.get('/formulario',(req,res)=>{
    res.render('formulario')
})

router.get('/cadUser',(req,res)=>{
    res.render('formUser')
    
})

router.get('/categoria',(req,res)=>{
    res.render('categoria')
})

router.get('/categoria/add',(req,res)=>{
    res.render('addCategoria')
})

//ROTAS PAGINA PRINCIPAL

router.get('/',(req,res)=>{
    res.render('indexDani')
})

//CORRETOR-------------------------------------------

router.get('/formCorretor',(req,res)=>{
    res.render('formCorretor')
})

 //LISTA OS CORRETORES


router.get('/property-single',(req,res)=>{
    res.render('property-single')
})


router.get('/formLogin',(req,res)=>{
    res.render('formLogin')
})

//router.post('/login',CorretoresController.login);

router.post('/formLogin',(req,res,next)=>{

passport.authenticate("local",{
    successRedirect:"/",
    failureRedirect:"/formLogin",
    failureFlash:true,
})(req,res,next)

})

router.get('/logout',(req,res)=>{
    req.logout();
    req.flash('success_msg','deslogado com sucesso')
    res.redirect('/')
})


//EXPORTAR O ROUTER O MÓDULO EXPORTS RECEBE O ROUTER
module.exports=router