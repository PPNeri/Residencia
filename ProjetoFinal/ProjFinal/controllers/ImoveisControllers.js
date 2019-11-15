const Imovel=require('../models/Imoveis');

module.exports={


    async showForm(req,res){
        res.render('formImovel')
    },

    async create (req,res){
        const imovel=await Imovel.create({
            corretor_cpf:req.body.corretor_cpf,
            tipo:req.body.tipo,
            cidade:req.body.cidade,
            endereco:req.body.endereco,
            cep:req.body.cep,
            banheiros:req.body.banheiros,
            n_quartos:req.body.n_quartos,
            garagem:req.body.garagem,
            valor:req.body.valor,
            img1:req.body.img1,
            img2:req.body.img2,
            img3:req.body.img3

        }).then(function(){
            req.flash("criadocomsucesso")
            res.redirect('/')
        }).catch(function(erro){
            res.send("Erro ao criar : "+erro)
        })

        return res.json(imovel);
    
      
    },

    async list(req,res){

        const imoveis=await Imovel.findAll({order:[['createdAt','DESC']]}).then(function(imoveis){
        res.render('listImoveis',{imoveis:imoveis})


        })

    },
    async listprop(req,res){

        const imoveis=await Imovel.findAll({order:[['createdAt','DESC']]}).then(function(imoveis){
        res.render('property-grid2',{imoveis:imoveis})


        })

    },
    async show(req,res){

       
        const imoveis=await Imovel.findByPk(req.params.id);
        
        
        return res.json(imoveis);
    },

    async delete(req,res){
        Imovel.destroy({where:{'id':req.params.id}}).then(function(){
            res.redirect('/list/imoveis')
        }).catch(function(erro){
            res.send('Este imovel possui um imovel cadastrado')
        })
    
    },
    async editar(req,res){

        Imovel.findOne({where:{'id':req.params.id}}).then((imovel)=>{
            res.render('formEditImovel',{imovel:imovel})
    
        }).catch((err)=>{
            req.flash("erro_msg","Este imovel não existe")
            res.redirect('/')
        })
    
    },
    
    async editado(req,res){
    
        Imovel.findOne({where:{'id':req.body.id}}).then((imovel)=>{
        
            imovel.corretor_cpf=req.body.corretor_cpf
            imovel.cidade=req.body.cidade
            imovel.tipo=req.body.tipo
            imovel.endereco=req.body.endereco
            imovel.cep=req.body.cep
            imovel.banheiros=req.body.banheiros
            imovel.n_quartos=req.body.n_quartos
            imovel.garagem=req.body.garagem
            imovel.valor=req.body.valor
            imovel.img1=req.body.img1
            imovel.img2=req.body.img2
            imovel.img3=req.body.img3
        
                imovel.save().then(()=>{
                    req.flash('success_msg',"salvo com sucesso")
                    res.redirect('/list/imoveis')
                }).catch((erro)=>{
                    req.flash("erro_msg",'erro ao salvar')
                    res.redirect('/')
                })
    
    
        }).catch((err)=>{
            req.flash("erro_msg","Erro na edição")
            res.redirect('/')
        })
    
    },



    
}