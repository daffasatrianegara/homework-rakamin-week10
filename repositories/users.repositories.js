const pool = require('../config')

const getUsers = (params) => {
    return new Promise((resolve, reject) => {
        const page = parseInt(params.page) || 1
        const limit = parseInt(params.limit) || 10
        const offset = (page - 1) * limit
        pool.query('SELECT * FROM users ORDER BY id LIMIT $1 OFFSET $2', [limit, offset], (err, results) => {
            if(err) {
                reject(err)
            }
            const rows = results.rows
            resolve(rows)
        })
    })
}

const getUsersById = (params) => {
    return new Promise((resolve, reject) => {
        const id = parseInt(params)
        pool.query('select * from users where id = $1', [id], (err, results) => {
            if(err) {
                reject(err)
            }
            const rows = results.rows
            resolve(rows)
        })
    })
}

const editUsers = (params) => {
    return new Promise((resolve, reject) => {
        const { id, email, gender, password, role } = params;
        pool.query('update users set email = $1, gender = $2, password = $3, role = $4 where id = $5', [email, gender, password, role, id], (err, results) => {
            if(err) {
                reject(err)
            }
            resolve("Data successfully edited...")
        })
    })
}

const deleteUsers = (params) => {
    return new Promise((resolve, reject) => {
        const id = parseInt(params)
        pool.query('DELETE FROM users WHERE id = $1', [id], (err, results) => {
            if(err) {
                reject(err)
            }
            resolve("Data successfully deleted...")
        })
    })
}

module.exports = {
    getUsers,
    getUsersById,
    editUsers,
    deleteUsers
}