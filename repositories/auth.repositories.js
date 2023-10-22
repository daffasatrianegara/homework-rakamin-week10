const pool = require('../config')
const { middlewares } = require('../middlewares')
const jwt = require('jsonwebtoken')
require('dotenv').config({path : '../.env'})
const secret_key = process.env.SECRET_KEY || 'koderahasianegara'

const register = (params) => {
    return new Promise((resolve, reject) => {
        const { id, email, gender, password, role } = params
        pool.query('insert into users (id, email, gender, password, role) values ($1, $2, $3, $4, $5)', [id, email, gender, password, role], (err, results) => {
            if(err) {
                reject(err)
            }
            resolve('registration was successful...')
        })
    })
}

const login = (params) => {
    return new Promise((resolve, reject) => {
        const { email, password } = params
        pool.query('select id, email, password from users where email=$1 and password=$2',  [email, password], (err, results) => {
            if(err) {
                reject(err)
            }
            const user = results.rows[0]
            const email = user.email
            const token = jwt.sign({ email: email }, secret_key);
            const hasil = 'Bearer ' + token
            resolve(hasil)
        })
    })
}

module.exports = {
    register,
    login
}