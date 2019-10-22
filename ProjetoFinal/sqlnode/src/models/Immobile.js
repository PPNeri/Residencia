const {Model,DataTypes}=require('sequelize');

class Immobile extends Model{

    static init(sequelize){
        super.init({
            localizacao:DataTypes.STRING,
            tipo:DataTypes.STRING,
            valor:DataTypes.INTEGER,
            imagem:DataTypes.STRING,


        },{
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.User,{foreignKey:'user_id',as:'user'});

    }

}
module.exports=Immobile;