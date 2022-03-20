const Sequelize = require("sequelize")
const config = require("../config/config")

const Atendimentos = require("../models/atendimentos");

const connection = new Sequelize(config);

Atendimentos.init(connection);

module.exports = connection;