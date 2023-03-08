const { Sequelize, INTEGER, STRING, Model } = require('sequelize')
let sequelize = require('../../common/dbConnenction')
class teacher extends Model {}
teacher.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: INTEGER,
    },
    department: {
      type: STRING(),
      allowNull: false,
    },
    teacherId: {
      unique: true,
      allowNull: false,
      type: STRING(),
    },

    officeLocation: {
      unique: true,
      allowNull: false,
      type: STRING(),
    },
    officeHours: {
      allowNull: false,
      type: STRING(),
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize: sequelize,
    modelName: 'teacher',
    hooks: {
      afterDestroy: function (instance) {
        instance.getUser().then(user => user.destroy())
      },
    },
  }
)
module.exports = teacher
