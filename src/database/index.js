const Sequelize = require("sequelize")
const config = require("../config/config")

const Clientes = require("../models/clientes");

const connection = new Sequelize(config);

Clientes.init(connection);

module.exports = connection;