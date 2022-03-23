<br />
<p align="center">
    <img src="./public/assets/airtightStudio.png" alt="Logo" width="300">

  <h3 align="center">Studio Tattoo API com Node, Express, Sequelize e SQLite</h3>
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
Projeto desenvolvido no final do Módulo 4, na Turma 10 do curso de Desenvolvimento Web Fullstack da Resilia Educação. A finalidade do projeto foi criar uma API para um estúdio de tatuagem utilizando Node, Express, Sequelize e SQLite. 

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

**GET** / - A rota deve exibir todos os atendimentos cadastrados.<br>

**GET** /atendimentos/:id - A rota deve listar um atendimento baseado em seu ID.<br>

**POST** /atendimentos - A rota deve cadastrar um atendimento com as informações passadas no body da requisição.<br>

```javascript
{
nome:"Gisele",
sobrenome:"Vieira Rocha",
email:"rochavieira@hotmail.com",
telefone:"44 9 99387752",
descricao_tattoo:"Uma tatuagem de um barco, de mais ou menos 50cm no braço.",
link_foto_tattoo:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftudocommoda.com%2Fpiercing-tattoo%2Ftatuagem-de-barco-e-navio%2F&psig=AOvVaw2i_rXpQXIrKT0s3IbowbEN&ust=1647831430415000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNDkgMzY0_YCFQAAAAAdAAAAABAD",
 data_sessao_tattoo:"2022-04-17",
 nome_tatuador:"Maria Júlia Rosseto"
}
```

**PATCH** /atendimentos/:id - A rota deve atualizar um atendimento com as informações passadas no body da requisição. Caso necessário apenas uma informação pode ser atualizada um por vez.<br>

```javascript
{
id: 1,
nome: "John Doe",
sobrenome: "Martins",
email: "john@hotmail.com",
telefone: "44 9 99786753",
descricao_tattoo: "Uma tatuagem de dragão, sem cores, de mais ou menos 70cm nas costas."
}
```

**DELETE** /atendimentos/:id - A rota deve deletar um atendimento baseado em seu ID.<br>

# Validação de dados:
 
 

# Rodando o projeto:

### Pré-requisitos:
Antes de começar, você precisará instalar em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Insomnia](https://insomnia.rest/download). <br> Além disso, é aconselhável ter um editor como o [VSCode](https://code.visualstudio.com/) para trabalhar com o código!

### Instalando e rodando o projeto:


```bash
# Crie uma pasta onde desejar, clique com o botão direito e depois clique em -> Git Bash Here.

# Clone este repositório.
$git clone https://github.com/CibeleMartins/studioTattooAPI-M4

# Abra a pasta clonada em seu VSCode.

# Ao abrir a pasta no VSCode, clique em -> Terminal e inicie um novo terminal.

# Certifique-se de que está dentro da pasta clonada para que os outros comandos funcionem com êxito.
$cd studioTattooAPI-M4

# Instale as dependências do projeto.
$npm install

# Inicie o servidor da aplicação.
$npm start

# Após isso, para não precisar abrir um novo terminal, aperte CTRL + C, digite "s" e aperte ENTER.

# Em seguida digite o comando responsável por criar a base de dados com a entidade Atendimentos.
$npm run create-table

# OBS: 1 - Caso deseje fazer alguma alteração na entidade Atendimentos, entre em -> migrations para configurá-la e em -> models para passar a configuração da migração, e depois digite o comando supracitado. 2 - Caso seja feito esse tipo de alteração na tabela, é necessário também, inserir as alterações nos Atendimentos pré-inseridos na pasta seeders.

# Após, declare o comando que vai inserir alguns Atendimentos já pré-inseridos no módulo da pasta seeders para visualizarmos na tabela Atendimentos.
$npm run populate-table 

# Certifique-se de que o arquivo -> database.sqlite foi criado na pasta -> database e que a tabela possui três registros.

# Inicie a aplicação novamente para realizar as etapas no Insomnia com êxito.
$npm start

# Se desejar deletar a migração de colunas e dados da tabela Atendimentos digite o comando
$npm run delete-table

#Obs: Caso o usuário queira incrementar o projeto é recomendado que observe e verifique a documentação do Sequelize.
https://sequelize.org/

```
# CRUD com Insomnia:

Utilize o Insomnia para realizar as requisições na studioTattooApi! Para isso, abra o Insomnia no seu computador.

Clique em -> **Create** e depois em -> **File**.

Vá até o arquivo -> **crudInsomnia.har** inserido dentro da pasta raiz do projeto, selecione-o e clique em -> **import**.

**Ou somente clique no botão abaixo, observe os Gifs e realize as etapas seguintes**

<a href="https://insomnia.rest/run/?label=studioTattooApi&uri=https%3A%2F%2Fraw.githubusercontent.com%2FCibeleMartins%2FstudioTattooAPI-M4-Resilia%2Fmain%2FcrudInsomnia.har" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>

<p>

<img src="./public/assets/insomnia.gif" alt="Logo" width="300">

</p>
<br>

Abra a coleção criada no Insomnia com o nome **My Collection**. Através dos métodos HTTP você pode realizar todas as operações do CRUD com a studioTattooApi. Para isso é necessário que você clique em -> **No Environment** -> **Manage Environments** -> **Base Environments** e declare o seguinte **json**

{ "url": "localhost:3000" }

Clique em -> **Done**.

Após isso, utilize a variável de ambiente URL antes do nome da rota e teste o CRUD da aplicação.


# Tecnologias utilizadas: 
<p align="center">
<a href="https://nodejs.org/en/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" width="40" /></a> <a href="https://expressjs.com/pt-br/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" height="40" width="40" /></a> <a href="https://insomnia.rest/download"><img src="./public/assets/insomniaIcon.png" height="40" width="40" /></a> <a href="https://sequelize.org"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" height="40" width="40" /></a> <a href="https://www.sqlite.org/index.html"><img src="./public/assets/sqlite3Icon.png" height="40" width="80" /></a>
</p>



---
**Desenvolvido por <a href="https://www.linkedin.com/in/cibelemartinssss/">Cibele Martins</a> .** 