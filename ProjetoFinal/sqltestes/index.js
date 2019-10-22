const Sequelize = require('sequelize');
const sequelize = new Sequelize('imobdb', 'postgres', '01123581321', {
  host: 'localhost',
  dialect:postgres,
  define:{
    timestamps:true,
    underscored:true,

}
});


const Model = Sequelize.Model;
class User extends Model {}
User.init({
  // attributes
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
    // allowNull defaults to true
  }
}, {
  sequelize,
  modelName: 'user'
  // options
});







sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


  User.sync({ force: true }).then(() => {
    // Now the `users` table in the database corresponds to the model definition
    return User.create({
      firstName: 'John',
      lastName: 'Hancock'
    });
  });