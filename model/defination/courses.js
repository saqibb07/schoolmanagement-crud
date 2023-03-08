const { Sequelize, INTEGER, STRING, Model } = require('sequelize')
let sequelize = require('../../common/dbConnenction')
class courses extends Model {}
courses.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: INTEGER,
    },
    courseTitle: {
      type: STRING(),
      allowNull: false,
    },
    creditHours: {
      allowNull: false,
      type: STRING(),
    },

    courseCode: {
      allowNull: false,
      type: STRING(),
    },
    labs: {
      allowNull: false,
      type: STRING(),
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize: sequelize,
    modelName: 'courses',
  }
)
module.exports = courses
