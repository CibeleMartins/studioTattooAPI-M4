const database= require("../models/atendimentos");
const {DataTypes} = require("sequelize");


class Validacoes {

  static validaTipoId(id) {

    const idValid = parseInt(id)

    if (idValid) {

      return true 

    } else {

      return false

    }

  }


  static async validaId(id) {

    const idInt = await database.findOne({where: {id : id}})

    if(idInt) {

      return true

    } else {

      return false

    }

  }

}


module.exports= Validacoes;