
const { Model, DataTypes } = require("sequelize");

class Clientes extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
         },
        nome: DataTypes.STRING,
        sobrenome: DataTypes.STRING,
        email: DataTypes.STRING,
        telefone: DataTypes.STRING,
        descricao_tattoo: DataTypes.TEXT,
        data_sessao_tattoo: DataTypes.DATE,

      },
      
      {
        sequelize,
        modelName: "Clientes",
      }
    );
  }


}

module.exports = Clientes;