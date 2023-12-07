const {model} = require('mongoose')
const userSchema = require('../Schema/UserSchema')

const userModel = new model ('users', userSchema)

module.exports = userModel