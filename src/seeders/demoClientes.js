'use strict';

module.exports = {

  async up (queryInterface, Sequelize) {
  
     await queryInterface.bulkInsert('Clientes', [

      {
      nome: 'John Doe',
      sobrenome: "Martins",
      email: "john@hotmail.com",
      telefone:"44 9 99786753",
      descricao_tattoo: "Uma tatuagem de leão, sem cores, de mais ou menos 70cm nas costas.",
      data_sessao_tattoo: new Date ("2022-03-23"),
      createdAt: new Date (),
      updatedAt: new Date(),
    },

    {
      nome: 'Maria Julia',
      sobrenome: "Vitorin",
      email: "mariajv@hotmail.com",
      telefone:"44 9 99386784",
      descricao_tattoo: "Uma tatuagem de sereia, com cores em preto e vermelho, de mais ou menos 90cm na entre as costas e a perna.",
      data_sessao_tattoo: new Date ("2022-03-23"),
      createdAt: new Date (),
      updatedAt: new Date(),
    },
  
  
  ], {});
  
  },

  async down (queryInterface, Sequelize) {
   
   await queryInterface.bulkDelete('Clientes', null, {});
     
  }
  
};