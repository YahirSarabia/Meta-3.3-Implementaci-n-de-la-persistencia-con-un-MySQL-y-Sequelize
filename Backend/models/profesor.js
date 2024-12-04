'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class profesor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  profesor.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    noempleado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    semestreIngresado: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'profesor',
    timestamps: false // Desactiva las columnas `createdAt` y `updatedAt`
  });
  return profesor;
};