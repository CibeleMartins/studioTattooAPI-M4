const res = require("express/lib/response");
const {DataTypes} = require("sequelize")
const database = require("../models/atendimentos");

class atendimentosController {
  
  static async listaTodosReg(req, res) {

    try {

      const todosRegistros = await database.findAll()

      return res.status(200).json(todosRegistros)

    } catch (error) {

      return res.status(400).json(error.message)

    }
    
  }

  static async listaUm(req, res) {

    const {id} = req.params;
    
    try {

      const umRegistro = await database.findOne({ 
        where: {
          id: id
        }
      })

      return res.status(200).json(umRegistro)

    } catch (error) {

      return res.status(400).json(error.message)

    }

  }

  static async insereRegistro(req, res) {

    const novoReg = req.body;

    try {

      const regCriado = await database.create(novoReg)

      return res.status(201).json(regCriado)

    } catch (error) {

      return res.status(400).json(error.message)

    }

  }

  static async atualizaRegistro(req, res) {

    const {id} = req.params;
    const regModificado = req.body

    try {

      await database.update(regModificado, {where: {id: id}})

      const regAtualizado = await database.findOne({where: {id: id}})

      return res.status(200).json(regAtualizado)

    } catch (error) {

      return res.status(400).json(error.message)

    }

  }

  static async deletaRegistro(req, res) {

    const {id} = req.params;

    try {

      await database.destroy({where: {id:id}})

      return res.status(200).json({mensagem: `O id ${id} foi deletado com sucesso.`})

    } catch (error) {

      return res.status(400).json(error.message)

    }

  }


}


module.exports = atendimentosController;