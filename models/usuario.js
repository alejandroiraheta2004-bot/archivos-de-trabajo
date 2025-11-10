'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {

    static associate(models) {

      Usuario.belongsToMany(models.Rol, {
        through: models.UsuarioRol,
        foreignKey: "usuarioId",
        otherKey: "rolId"
      });
    }
  }
  Usuario.init({
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    username: {
      field: "username",
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      field: "email",
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      field: "password",
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActive: {
      field: "is_active",
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    createdAt: {
      field: "created_at",
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
    updatedAt: {
      field: "updated_at",
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
  }, {
    sequelize,
    timestamps: true,
    modelName: 'Usuario',
    name: {
      singular: "Usuario",
      plural: "Usuarios"
    },
    tableName: "usuarios"
  });
  return Usuario;
};