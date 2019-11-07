const User=require('../models/User');
const Post=require('../models/Post');

module.exports={

async show(req,res){
//    const user=await User.findByPk(req.params.id);
//    const post=await Post.findByPk(req.params.id);
//    const post=await Post.findAll({include:[{all:true}]});
    const user=await User.findAll({where:{id:userId}})
//    const user=await User.findOne({where:{id:userId}})


    return res.json(user);

}

}