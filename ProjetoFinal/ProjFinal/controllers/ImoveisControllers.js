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
            res.redirect('/')
        }).catch(function(erro){
            res.send("Erro ao criar : "+erro)
        })

        return res.json(corretor);
    
      
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
        res.render('listImoveisId',imoveis)
        //res.send("ID"+req.params.id)
        //return res.json(imoveis);
    },






    
}