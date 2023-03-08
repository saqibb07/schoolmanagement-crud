const Sequelize = require('sequelize')
var config = require('../../config.json')
const db = {}
config = config.db
let sequelize = require('../../common/dbConnenction')
const users = require('./user')
const teachers = require('./teacher')
const students = require('./students')
const courses = require('./courses')
// const orders = require('./Orders')
// const products = require('./Products')
// const roles = require('./Roles')
// const cart = require('./Cart')
// const cartItems = require('./CartItems')
//define relation
//roles-user many to one
// roles.hasMany(users, { onDelete: 'CASCADE', foreignKey: 'roleid' })
// users.belongsTo(roles, { onDelete: 'CASCADE', foreignKey: 'roleid' })
//roles: cart-user one to one
// users.hasOne(cart, { onDelete: 'CASCADE', foreignKey: 'userId' })
// cart.belongsTo(users, { onDelete: 'CASCADE', foreignKey: 'userId' })
//many to many relation product-cart
//make a table cartItems
//roles:product-cartItems
// products.hasMany(cartItems, { onDelete: 'CASCADE', foreignKey: 'productId' })
// cartItems.belongsTo(products, { onDelete: 'CASCADE', foreignKey: 'productId' })
// roles:cartItems-cart
// cart.hasMany(cartItems, { onDelete: 'CASCADE', foreignKey: 'cartID' })
// cartItems.belongsTo(cart, { onDelete: 'CASCADE', foreignKey: 'cartID' })

const models = {
  users,
  students,
  courses,
  teachers,
}
users.hasOne(students, { onDelete: 'CASCADE', hooks: true, foreignKey: 'roleId' })
students.belongsTo(users, { onDelete: 'CASCADE', foreignKey: 'roleId' })

users.hasOne(teachers, { onDelete: 'CASCADE', hooks: true, foreignKey: 'roleId' })
teachers.belongsTo(users, { onDelete: 'CASCADE', hooks: true, foreignKey: 'roleId' })

users.hasOne(models.teachers, { as: 'teacherData' })
sequelize.models = models
db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = { db, models }
