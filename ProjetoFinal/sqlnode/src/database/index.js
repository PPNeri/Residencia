const Sequelized = require('sequelize');
const dbConfig=require('../config/database');

const User=require('../models/User');
const Immobile=require('../models/Immobile');

const connection =new Sequelized(dbConfig);

User.init(connection);
Immobile.init(connection);
Immobile.associate(connection.models);
User.associate(connection.models);
module.exports=connection;

