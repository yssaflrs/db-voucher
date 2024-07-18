const express = require('express');
require('dotenv').config()
const server = express()

const connectDb = require('./database/dbConnection')


server.use(express.json())

server.use('/api/voucher', require('./routes/disbursementRouter'))

const port = 5000


const startServer = async() => {
    try {
        await connectDb()
        server.listen(port, ()=> {
            console.log(`Server listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

startServer()