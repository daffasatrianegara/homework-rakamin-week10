const express = require('express')
const pool = require('./config/index')
const routes = require("./routes");
const app = express()
const PORT = process.env.PORT

app.use(express.json())

pool.connect((err, res) => {
    if(err) {
        throw err
    }
    console.log('database connected...')
})

app.use(routes)

app.listen(PORT, () => {
    console.log(`server is listening on PORT ${PORT}`)
})