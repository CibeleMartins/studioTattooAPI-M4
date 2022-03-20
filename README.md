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

<b>[GET] </b> / - A rota deve exibir todos os atendimentos cadastrados.<br>

<b>[GET] </b> /atendimentos/:id - A rota deve listar um atendimento baseado em seu ID.<br>

<b>[POST] </b> /atendimentos - A rota deve cadastrar um atendimento com as informações passadas no body da requisição.<br>

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

<b>[PATCH] </b> /atendimentos/:id - A rota deve atualizar um atendimento com as informações passadas no body da requisição. Caso necessário apenas uma informação pode ser atualizada um por vez.<br>

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

<b>[DELETE] </b> /atendimentos/:id - A rota deve deletar um cliente baseado em seu ID.<br>

# Validação de dados:
 
 

# Rodando o projeto:

### Pré-requisitos:
Antes de começar, você precisará instalar em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Insomnia](https://insomnia.rest/download). <br> Além disso, é aconselhável ter um editor como o [VSCode](https://code.visualstudio.com/) para trabalhar com o código!

### Instalando e rodando o projeto:


```bash
# Clone este repositório
$git clone https://github.com/CibeleMartins/studioTattooAPI-M4

# Abra seu VSCode, clique em -> **arquivo** -> **abrir pasta** e abra a pasta da API.

# Na parte superior de seu VSCode, -> abra um novo terminal e instale as dependências do projeto
$npm install

# Entre no arquivo -> .env, e na linha 1, atribua um valor a variável de ambiente PORT= inserindo o número de uma porta do seu localhost 
PORT=NUMBER

# Após isso, declare o mesmo número de porta na linha 10, constante "port", do módulo app.js -> localizado na raiz do projeto.
Exemplo: const port = process.env.PORT || port;

# Volte ao terminal do VSCode e inicie o servidor da aplicação
$npm start

# Em seguida digite o comando responsável por criar a base de dados com a entidade Atendimentos. 
$npm run create-table

# Caso deseje fazer alguma alteração na entidade Atendimentos, entre em -> migrations para configurá-la e em -> models para passar a configuração da migração, e depois digite o comando supracitado.

# Após, declare o comando que vai inserir alguns Atendimentos já pré-inseridos no módulo da pasta seeders para visualizarmos na tabela Atendimentos.
$npm run populate-table 

# Se desejar deletar a migração de colunas e dados da tabela Atendimentos digite o comando
$npm run delete-table

#Obs: Caso o usuário queira incrementar o projeto é recomendado que observe e verifique a documentação do Sequelize.
https://sequelize.org/

```
# CRUD com Insomnia:

Utilize o Insomnia para realizar as requisições na studioTattooApi! Para isso, abra o Insomnia no seu computador.

Clique em -> **Create** e depois em -> **File**.

Vá até o arquivo -> **crudInsomnia.har** inserido dentro da pasta raiz do projeto, selecione-o e clique em -> **import**.

**Ou somente clique no botão abaixo e realize as etapas seguintes**

<a href="https://insomnia.rest/run/?label=studioTattooApi&uri=https%3A%2F%2Fraw.githubusercontent.com%2FCibeleMartins%2FstudioTattooAPI-M4-Resilia%2Fmain%2FcrudInsomnia.har" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>

Abra a coleção criada no Insomnia com o nome **My Collection**. Através dos métodos HTTP você pode realizar todas as operações do CRUD com a studioTattooApi. Para isso é necessário que você clique em -> **No Environment** -> **Manage Environments** -> **Base Environments** e declare o seguinte **json**

{ "url": "localhost:port" }

Clique em -> **Done**.

No lugar de "port" insira o número de uma porta do seu localhost, e faça o mesmo com os endereços das rotas com os verbos HTTP. Importante ressaltar, que nas rotas o endereço deve ser exatamente **"localhost:port/rota"**, caso o arquivo não seja aberto com essas configurações é necessário inserí-las.

**OBS**: O número da "port" deve ser o mesmo declarado na variável de ambiente PORT=NUMBER da aplicação e no app.js.

# Tecnologias utilizadas: 
<p align="center">
<a href="https://nodejs.org/en/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" width="40" /></a> <a href="https://expressjs.com/pt-br/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" height="40" width="40" /></a> <a href="https://insomnia.rest/download"><img src="./public/assets/insomniaIcon.png" height="40" width="40" /></a> <a href="https://sequelize.org"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" height="40" width="40" /></a> <a href="https://www.sqlite.org/index.html"><img src="./public/assets/sqlite3Icon.png" height="40" width="80" /></a>
</p>



---
**Desenvolvido por <a href="www.linkedin.com/in/cibelemartinssss">Cibele Martins</a> .** 