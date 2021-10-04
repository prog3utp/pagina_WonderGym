const clientesModel = require("../model/ClientesModel")//se trae el modelo

module.exports = class clientesController {//exporta clase restaurantcontroller
  static async getAll(request, response) {
    try {
      const result = await clientesModel.find();//hace busqueda en base de datos para que devuelva esos datos
      response.status(200).json(result);
    } catch (err) {
      response.status(404).json({message: err.message});
    }
  }

  static async getById(request, response) { //para hacer consultas a la base de datos
    try {
      const id = request.params.id;//aqui esta el id para hacer esa busqueda mediante url
      const result = await clientesModel.findOne({_id: id});//me trae el id
      if (result != null) {
        response.status(200).json(result)
      } else {
        response.status(404).json(); //cuando hay valores vacios
      }
    } catch (err) {
      response.status(400).json({message: err.message})
    }
  }

  static async getP12(request, response){
    try {
      const p1 = request.params.param1;
      const p2 = request.params.param2;
      const result = await clientesModel.find({correo: p1, apellido:p2})
      if (result != null) {
        response.status(200).json(result)
      } else {
        response.status(404).json();
      }
    } catch (err) {
      response.status(400).json({message: err.message});
    }
  }

  static async deleteById(request, response){
    try {
      const id = request.params.id;
      await clientesModel.deleteOne({_id: id});
      response.status(200).json();
    } catch (err) {
      response.status(400).json({message: err.message})
    }
  }

  static async create(request, response){
    try {
      const document = request.body;
      const newRestaurant = await clientesModel.create(document);
      response.status(201).json(newRestaurant);
    } catch (err) {
      response.status(400).json({message: err.message})
    }
  }

  static async updateById(request, response) {
    try {
      const id = request.params.id;
      const val = request.params.val;
      const document = request.body;
      await clientesModel.updateOne({"_id": id}, {$set: {"contraseña": val}});
      response.status(200).json();
    } catch (err) {
      response.status(400).json({message: err.message})
    }
  }

  static async replaceById(request, response) {
    try {
      const id = request.params.id;
      const document = request.body;
      await clientesModel.update({"_id": id}, document);
      response.status(200).json();
    } catch (err) {
      response.status(400).json({message: err.message})
    }
  }
}