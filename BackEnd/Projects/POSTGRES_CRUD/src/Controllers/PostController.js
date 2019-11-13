const Post=require('../models/Post');

module.exports={

async index (req,res){
    const post=await Post.findAll({});
    return res.json(post);
},

async show(req,res){
    const post=await Post.findByPk(req.params.id);
    console.log(post)
    return res.json(post);
},

async create (req,res){
    const post=await Post.create(req.body);
    return res.json(post);

},

async update(req,res){
    const post=await Post.findByPk(req.params.id);
    await post.update(req.body);
    return res.json(post);
},

async delete (req,res){
    const post=await Post.findByPk(req.params.id);
    await post.destroy();
    return res.send();
}
}