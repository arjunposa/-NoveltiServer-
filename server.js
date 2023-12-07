const express = require('express')
const connectToDB = require('./MongoDB/DBConnection')
const userRouter = require('./Routers/UserRouter')
const cors = require('cors')
const app = express()

app.use(express.json())

app.use(cors({}))


//user Router
app.use('/users', userRouter)

                 app.listen(5000, async ()=>{
    await connectToDB()
    console.log("server is running ")
})