const Corretor=require('../models/Corretores');
const bcrypt=require('bcryptjs')

module.exports={

 
    async index (req,res){
        const corretor=await Corretor.findAll({});
        return res.json(corretor);
    },
    
    async show(req,res){
        const corretor=await Corretor.findByPk(req.params.cpf);
        res.render('corretorContato',{corretor:corretor})
        //return res.send(corretor);
        
    },
    
    async create (req,res){
        const corretor=await Corretor.create({
                cpf:req.body.cpf,
                creci:req.body.creci,
                nome:req.body.nome,
                dataNasc:req.body.data_nasc,
                genero:req.body.genero,
                email:req.body.email,
                senha:bcrypt.hashSync(req.body.senha,10),
                img:req.body.img,
                eAdmin:1
                
            }).then(function(){
                res.redirect('/')
            }).catch(function(erro){
                res.send("Erro ao criar : "+erro)
                
        })

        return res.json(corretor);
    
      
    },
    
    async update(req,res){
        const corretor=await Corretor.findByPk(req.params.cpf);
        await corretor.update(req.body);
        return res.json(corretor);
    },

   
    
    async delete(req,res){
        Corretor.destroy({where:{'cpf':req.params.cpf}}).then(function(){
            res.redirect('/list/corretores')
        }).catch(function(erro){
            res.send('Este Corretor possui um imovel cadastrado')
        })
    
    },

    async list(req,res){

        const corretor=await Corretor.findAll({order:[['createdAt','DESC']]}).then(function(corretores){
        res.render('listCorretores',{corretores:corretores})


        })

    },


async editar(req,res){

    Corretor.findOne({where:{'cpf':req.params.cpf}}).then((corretor)=>{
        res.render('formEditCorretor',{corretor:corretor})

    }).catch((err)=>{
        req.flash("erro_msg","Este corretor não existe")
        res.redirect('/')
    })

},

async editado(req,res){

    Corretor.findOne({where:{'cpf':req.body.cpf}}).then((corretor)=>{
    
        
            corretor.cpf=req.body.cpf
            corretor.creci=req.body.creci
            corretor.nome=req.body.nome
            corretor.dataNasc=req.body.data_nasc
            corretor.genero=req.body.genero
            corretor.email=req.body.email
            corretor.img=req.body.img
            
            corretor.save().then(()=>{
                req.flash('success_msg',"salvo com sucesso")
                res.redirect('/')
            }).catch((erro)=>{
                req.flash("erro_msg",'erro ao salvar')
                res.redirect('/')
            })


    }).catch((err)=>{
        req.flash("erro_msg","Erro na edição")
        res.redirect('/')
    })

},
/*
async login(req,res){
    const user=await Corretor.findOne({
        where:{
            email:email=req.body.email
        }
    }).then(function(user){
        if(!user){
            res.redirect('/login');
        }else{
            bcrypt.compare(req.body.senha,user.senha,function(err,result){
                if(result==true){
                    console.log("Autenticado");
                    user.e_admin==true
                    res.redirect('/');
                }else{
                    console.log("deu ruim");
                    res.send("Senha incorreta",res.redirect('/login'))
                }
            })
        }
    })
    */
}



