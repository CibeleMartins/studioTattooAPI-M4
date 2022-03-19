"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable("Clientes", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
       },
       nome: {
         type: Sequelize.STRING,
         allowNull: false
       },
       sobrenome: {
         type: Sequelize.STRING,
         allowNull: false
       },
       email: {
        type: Sequelize.STRING,
        allowNull: false
       },
       telefone: {
         type: Sequelize.STRING,
         allowNull: false
       },
       descricao_tattoo: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      data_sessao_tattoo: {
        type: Sequelize.DATE,
        allowNull: false
      },
       createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },

    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Clientes");
  },
}; 
