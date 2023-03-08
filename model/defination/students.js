const { Sequelize, INTEGER, STRING, Model } = require('sequelize')
let sequelize = require('../../common/dbConnenction')

class students extends Model {}
students.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: INTEGER,
    },

    registrationNumber: {
      unique: true,
      allowNull: false,
      type: STRING(),
    },

    department: {
      unique: true,
      allowNull: false,
      type: STRING(),
    },
    semester: {
      allowNull: false,
      type: INTEGER,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize: sequelize,
    modelName: 'students',
    hooks: {
      afterDestroy: function (instance) {
        instance.getUser().then(user => user.destroy())
      },
    },
  }
)
module.exports = students
