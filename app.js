const express = require("express");
const routes = require("./src/routes")
require("./src/database")


const app = express();
app.use(express.json());


const port = process.env.PORT || 3011;

routes(app)

app.listen(port, ()=>{

  console.log(`Servidor rodando na porta ${port}!`)

});

module.exports = app;
