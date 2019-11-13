const Corretor=require('../models/Corretores');
const bcrypt=require('bcryptjs')

module.exports={

 
    async index (req,res){
        const corretor=await Corretor.findAll({});
        return res.json(corretor);
    },
    
    async show(req,res){
        const corretor=await Corretor.findByPk(req.params.cpf);
        return res.json(corretor);
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
                img:req.body.img
                
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








    

    
}



