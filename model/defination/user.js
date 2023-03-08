const { Sequelize, INTEGER, STRING, Model } = require('sequelize')
let sequelize = require('../../common/dbConnenction')
class users extends Model {}
users.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: INTEGER,
    },
    name: {
      type: STRING(),
      allowNull: false,
    },
    email: {
      unique: true,
      allowNull: false,
      type: STRING(),
    },

    phoneNumber: {
      unique: true,
      allowNull: false,
      type: STRING(),
    },
    password: {
      allowNull: false,
      type: STRING(),
    },
    role: {
      allowNull: false,
      type: STRING,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize: sequelize,
    modelName: 'users',
  }
)
module.exports = users
