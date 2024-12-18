'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class estudiante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  estudiante.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    matricula: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    semestreIngresado: {
      type: DataTypes.STRING,
      allowNull: false
    },
    creditosCursados: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'estudiante',
    timestamps: false // Desactiva las columnas `createdAt` y `updatedAt`
  });
  return estudiante;
};
