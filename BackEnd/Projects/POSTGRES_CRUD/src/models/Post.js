const Sequelize=require('sequelize');
const dbconfig=require('./database')
//const User =require('../models/User')

const Post =dbconfig.define('post',{
    
    title:{
        type:Sequelize.STRING
    },
    content:{
        type:Sequelize.TEXT
    }
    
});



module.exports=Post;