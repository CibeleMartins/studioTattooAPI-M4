'use strict';

module.exports = {

  async up (queryInterface, Sequelize) {
  
     await queryInterface.bulkInsert('Atendimentos', [

      {
      nome: 'John Doe',
      sobrenome: "Martins",
      email: "john@hotmail.com",
      telefone:"44 9 99786753",
      descricao_tattoo: "Uma tatuagem de leão, sem cores, de mais ou menos 70cm nas costas.",
      link_foto_tattoo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elo7.com.br%2Fquadro-o-rosto-do-leao-preto-e-branco%2Fdp%2F1563BAB&psig=AOvVaw2a75h2hsUdXwq5dbgkgYUW&ust=1647828884015000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNjR1IzP0_YCFQAAAAAdAAAAABAJ",
      data_sessao_tattoo: "25/03/2022",
      nome_tatuador: "Arista Vilarino",
      createdAt: new Date (),
      updatedAt: new Date(),
    },

    {
      nome: 'Maria Julia',
      sobrenome: "Vitorin",
      email: "mariajv@hotmail.com",
      telefone:"44 9 99386784",
      descricao_tattoo: "Uma tatuagem de sereia, com cores em preto e vermelho, de mais ou menos 90cm na lateral da perna direita.",
      link_foto_tattoo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tattooers.net%2Fpt%2Fchapel-tattoo%2Ftatuagem-perna-sereia%2F15061%2F&psig=AOvVaw0QXbQE0mw3d-sxQNxP7Ucv&ust=1647828949914000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOiYgLfP0_YCFQAAAAAdAAAAABAJ",
      data_sessao_tattoo: "04/04/2022",
      nome_tatuador: "Fernando Aleixo",
      createdAt: new Date (),
      updatedAt: new Date(),
    },

    {
      nome: 'Vitória',
      sobrenome: "Marques",
      email: "vitoriaM@hotmail.com",
      telefone:"44 9 99386351",
      descricao_tattoo: "Uma tatuagem de caveira, com cores em preto e vermelho, de mais ou menos 40cm no braço.",
      link_foto_tattoo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.minhatatuagem.com%2Ftatuagens-de-caveira%2F&psig=AOvVaw1PHzHMsveAghPiThJoLndP&ust=1647829772017000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIjjsLXS0_YCFQAAAAAdAAAAABAD",
      data_sessao_tattoo: "23/04/2022",
      nome_tatuador: "Ricardo Gomes da Silva",
      createdAt: new Date (),
      updatedAt: new Date(),
    },
  
  
  
  ], {});
  
  },

  async down (queryInterface, Sequelize) {
   
   await queryInterface.bulkDelete('Atendimentos', null, {});
     
  }
  
};