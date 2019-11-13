const User=require('../models/User');
const Post=require('../models/Post');

module.exports={

async show(req,res){
   

   const post=await Post.findAll({where:{'userId':req.params.userId}});
    return res.json(post);

}

}

