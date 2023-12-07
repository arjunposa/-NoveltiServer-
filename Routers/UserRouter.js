const express  = require('express')
const {postUser, getUsers, updateUser, deleteUser} = require('../Controllers/userController')
const userRouter = express.Router()

userRouter.post('/createuser', postUser )
userRouter.get('/getusers', getUsers)
userRouter.put('/updateuser/:id', updateUser)
userRouter.delete('/deleteuser/:id', deleteUser)

module.exports = userRouter