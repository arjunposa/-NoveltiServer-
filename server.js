const express = require('express')
const connectToDB = require('./MongoDB/DBConnection')
const userRouter = require('./Routers/UserRouter')
const cors = require('cors')
const app = express()

app.use(express.json())

app.use(cors({}))


//user Router
app.use('/users', userRouter)

app.listen(2020,'127.0.0.3', async ()=>{
    await connectToDB()
    console.log("server is running at http://127.0.0.3:2020")
})