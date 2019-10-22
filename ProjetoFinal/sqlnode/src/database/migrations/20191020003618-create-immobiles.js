'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('immobiles', { 
        
        id: {
          type:Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true,
          allowNull:false,

        }, 

        user_id:{
          type:Sequelize.INTEGER,
          allowNull:false,
          references:{model:'users',key:'id'},
          onUpdate:'CASCADE',
          onDelete:'CASCADE',
        },

        localizacao:{
          type:Sequelize.STRING,
          allowNull:false,
        },
        tipo:{
          type:Sequelize.STRING,
          allowNull:false,
        },
        valor:{
          type:Sequelize.INTEGER,
          allowNull:false,
        },
        imagem:{
          type:Sequelize.STRING,
          allowNull:true,
        },

        created_at:{
          type:Sequelize.DATE,
          allowNull:false,
        },

        updated_at:{
          type:Sequelize.DATE,
          allowNull:false,

        },
      
      });
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('immobiles');
    
  }
};
