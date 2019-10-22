const {Model,DataTypes}=require('sequelize');
class User extends Model{

    static init(sequelize){
        super.init({
            name:DataTypes.STRING,
            email:DataTypes.STRING,

        },{
            sequelize
        })
    }

    static associate(models){
        this.hasMany(models.Immobile,{foreignKey:'user_id',as:'immobiles'});

    }


}
module.exports=User;