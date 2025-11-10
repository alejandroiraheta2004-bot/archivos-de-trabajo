'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {

    static associate(models) {

    }
  }
  Rol.init({
    id: {
      field: "id",
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    nombre: {
      field: "nombre",
      type: Sequelize.STRING,
      allowNull: false
    },
    descripcion: {
      field: "descripcion",
      type: Sequelize.STRING,
      allowNull: true
    },
    is_active: {
      field: "is_active",
      type: Sequelize.BOOLEAN,
      defaultValue: true
    },
    createdAt: {
      field: 'created_at',
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('CURRENT_TIMESTAMP')
    },
    updatedAt: {
      field: 'updated_at',
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    timestamps: true,
    modelName: 'Rol',
    name: {
      singular: "Rol",
      plural: "Rols"
    },
    tableName: "rols"
  });
  return Rol;
};