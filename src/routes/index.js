const express = require("express");
const clientes = require("./clientesRoutes")

module.exports = app => {
  
  app.use(express.json())
  app.use(clientes)
 

}

