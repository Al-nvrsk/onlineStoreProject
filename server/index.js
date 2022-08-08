require('dotenv').config()
const express = require('express')
const { sync } = require('./db')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const e = require('express')
const fileUpload = require('express-fileupload')
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/',express.static(path.resolve(__dirname, 'static')))
// app.use(express.static(path.resolve(__dirname, 'api')))
app.use(fileUpload({}))
app.use('/api', router)


app.use(errorHandler)       // have to used last for work with errors

const start = async () => {
     await sequelize.authenticate()
     await sequelize.sync()
    try { app.listen(PORT, () => console.log(`Server started on ${PORT}`))

    } catch (err) {
        console.log(err)
    }
}

start()

