const Sequelize = require('sequelize');
const sequelize = new Sequelize('imobdb', 'postgres', '01123581321', {
  host: 'localhost',
  dialect:postgres,
  define:{
    timestamps:true,
    underscored:true,

}
});