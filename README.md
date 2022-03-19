<br />
<p align="center">
    <img src="./public/assets/airtightStudio.png" alt="Logo" width="300">

  <h3 align="center">API Hotel com Node, Express, Sequelize e SQLite</h3>
 <br />
  <p align="center">
     Sumário
      <p align="center">
  <a href="#sobre"> Sobre </a> |
  <a href="#conhecimentos-praticados"> Conhecimentos praticados </a> |
  <a href="#rotas-da-aplicação"> Rotas da aplicação </a> |
  <a href="#tecnologias-utilizadas"> Tecnologias utilizadas </a>      
       <br />
    <br />
    <h1 align="center">
    <img src="./public/assets/logoGit.png" alt="Logo" width="250">
 </h1>
  </p>
</p>


# Sobre
O objetivo do projeto foi criar uma API para um estúdio de tatuagem utilizando Node, Express, Sequelize e SQLite como projeto final do Módulo 4 da Turma 10 do curso de Desenvolvimento Web Fullstack da Resilia Educação.

Cada integrante do grupo ficou responsável pela criação de uma API referente à uma entidade do banco de dados do estúdio de tatuagem. 

Sendo eles: Atendimentos, tatuadores, produtos e fornecedores.

Nesta aplicação é possível cadastrar, listar, atualizar e deletar atendimentos.

# Conhecimentos Praticados
✔ NodeJs <br>
✔ Express <br>
✔ SQLite3 <br>
✔ Sequelize <br>
✔ CRUD com Sequelize <br>
✔ Padrão MVC


# Rotas da aplicação:

## Clientes

<b>[GET] </b> / - A rota deve exibir todos os atendimentos cadastrados.<br>

<b>[GET] </b> /atendimentos/:id - A rota deve listar um atendimento baseado em seu ID.<br>

<b>[POST] </b> /atendimentos - A rota deve cadastrar um atendimento com as informações passadas no body da requisição.<br>

```javascript
{

nome:"Viviane Rocha",
sobrenome:"da Silva",
email:"vivirocha@hotmail.com",
telefone:"44 9 88626775",
descricao_tattoo:"Uma borboleta rosa de 30cm no braço.",
data_sessao_tattoo:"2022-04-25"

}
```

<b>[PATCH] </b> /clientes/:id - A rota deve atualizar um atendimento com as informações passadas no body da requisição. Caso necessário apenas uma informação pode ser atualizada um por vez.<br>

```javascript
{
nome:"Adriano Firmino",
sobrenome:"da Silva",
email:"adfs@hotmail.com",
telefone:"44 9 88666558",
descricao_tattoo:"Uma flecha indiana de 30cm no braço, na cor preto.",
data_sessao_tattoo:"2022-04-25"
}
```

<b>[DELETE] </b> /clientes/:id - A rota deve deletar um cliente baseado em seu ID.<br>

# Validação de dados
 
 

# Rodando o projeto:

### Pré-requisitos:
Antes de começar, você precisará instalar em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Insomnia](https://insomnia.rest/download). <br> Além disso, é aconselhável ter um editor como o [VSCode](https://code.visualstudio.com/) para trabalhar com o código!

### Instalando e rodando o projeto:


```bash
# Clone este repositório
$ git clone https://github.com/CibeleMartins/clientTattooAPI-M4

# Acesse a pasta do projeto no terminal
$ cd pasta-projeto 

# Instale as dependências do projeto
$ npm install

# Instale as dependencias

#Comando do sequelize-cli

# Inicie o servidor da aplicação
$ npm start

# Utilize o Insomnia para realizar as requisições nas rotas

#Obs: Caso queira popular o banco de dados, acesse o arquivo 'app.js' no VSCode, remova o '//' da linha 14 até a 18, e execute o comando npm start.

```






# Tecnologias utilizadas: 
<p align="center">
<a href="https://nodejs.org/en/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" width="40" /></a> <a href="https://expressjs.com/pt-br/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" height="40" width="40" /></a> <a href="https://insomnia.rest/download"><img src="./public/assets/insomniaIcon.png" height="40" width="40" /></a> <a href="https://sequelize.org"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" height="40" width="40" /></a> <a href="https://www.sqlite.org/index.html"><img src="./public/assets/sqlite3Icon.png" height="40" width="80" /></a>
</p>



---
**Desenvolvido por <a href="www.linkedin.com/in/cibelemartinssss">Cibele Martins</a> .** 