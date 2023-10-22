const express = require('express')
const pool = require('./config/index')
const { usersRoutes, movieRoutes, authRoutes } = require("./routes");
const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended: true}));

pool.connect((err, res) => {
    if(err) {
        throw err
    }
    console.log('database connected...')
})

app.use(movieRoutes)
app.use(usersRoutes)
app.use(authRoutes)

app.listen(PORT, () => {
    console.log(`server is listening on PORT ${PORT}`)
})