'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsuarioRol extends Model {

    static associate(models) {

    }
  }
  UsuarioRol.init({
    id: {
      field:"id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    usuario_id: {
      field: "usuario_id",
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rol_id: {
      field:"rol_id",
      type: DataTypes.INTEGER,
      allowNull: false
    },
    createdAt: {
      field: "created_at",
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn("CURRENT_TIMESTAMP")
    },
    updatedAt: {
      field: "updated_at",
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn("CURRENT_TIMESTAMP")
    }
  }, {
    sequelize,
    modelName: 'UsuarioRol',
  });
  return UsuarioRol;
};