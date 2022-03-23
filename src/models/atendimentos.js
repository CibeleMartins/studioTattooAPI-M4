
const { Model, DataTypes } = require("sequelize");

class Atendimentos extends Model {
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
        cpf_cliente: DataTypes.STRING,
        email: DataTypes.STRING,
        telefone: DataTypes.STRING,
        descricao_tattoo: DataTypes.TEXT,
        link_foto_tattoo: DataTypes.STRING,
        data_sessao_tattoo: DataTypes.DATEONLY,
        nome_tatuador: DataTypes.STRING
        
      },
      
      {
        sequelize,
        modelName: "Atendimentos",
      }
    );
  }

}

module.exports = Atendimentos;