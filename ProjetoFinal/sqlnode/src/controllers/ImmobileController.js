const User = require('../models/User');
const Immobile = require('../models/Immobile');

module.exports={

async index (req,res){

    const {user_id}=req.params;
    const user =await User.findByPk(user_id,{
        include:{association:'immobiles'}

    });
    return res.json(user.immobiles);

},



async store(req,res){
    
    const { user_id }=req.params;
    const {localizacao,tipo,valor,imagem}=req.body;

    const user=await User.findByPk(user_id);


    if(!user){
        return res.status(400).json({ error: 'User not found'});
    }

    const immobile=await Immobile.create({
        localizacao,
        tipo,
        valor,
        imagem,
        user_id,

    });

    return res.json(immobile);
},

async delete(req,res){

const { user_id }=req.params;
const {localizacao}=req.body;

const user=await User.findByPk(user_id);


if(!user){
    return res.status(400).json({ error: 'User not found'});
}

const immobile=await Immobile.findOne({
    where:{localizacao}
});

await user.removeImmobile(immobile);

return res.json();

}


};