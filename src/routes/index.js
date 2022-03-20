const express = require("express");
const atendimentos = require("./atendimentosRoutes")

module.exports = app => {
  
  app.use(express.json())
  app.use(atendimentos)
 

}

