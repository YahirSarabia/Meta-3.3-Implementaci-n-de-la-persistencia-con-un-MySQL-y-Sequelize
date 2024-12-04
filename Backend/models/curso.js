'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class curso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  curso.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    clave: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    grupo: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'curso',
    timestamps: false // Desactiva las columnas `createdAt` y `updatedAt`
  });
  return curso;
};