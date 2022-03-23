const database= require("../models/atendimentos");
const req = require("express/lib/request");


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


  // static validaCpf(cpf_cliente) {


  // }

  // static validaDdd(telefone) {


  // }

}


module.exports= Validacoes;