const Sequelize=require('sequelize');
const dbconfig=require('./database')
const Post=require('../models/Post')

const User=dbconfig.define('users',{
    
    firstName:{
        type:Sequelize.STRING,
        required:true
    },
    lastName:{
        type:Sequelize.STRING,
        required:true
    },
    age:{
        type:Sequelize.INTEGER,
        required:true
    },
    email:{
        type:Sequelize.STRING,
        required:true
    },

});



module.exports=User;