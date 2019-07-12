/*Entry point of the backend application*/


//Dependencies
require('express-async-errors')
const express = require('express')
const router = require('./router')
const db = require('./config/db')
const cors = require('cors')
const path = require('path')

const app = express()

db()
app.use(cors())
//Parse JSON
app.use(express.json())

router(app)

app.use('/', express.static(path.join(__dirname, 'build')))
const PORT = process.removeListener.PORT || 8000


app.listen(PORT,() => {
    console.log(`Server started, listening on port ${PORT}`)
})

