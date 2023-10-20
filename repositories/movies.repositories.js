const pool = require('../config')

const getMovies = (params) => {
    return new Promise((resolve, reject) => {
        const page = parseInt(params.page) || 1
        const limit = parseInt(params.limit) || 10
        const offset = (page - 1) * limit
        pool.query('SELECT * FROM movies LIMIT $1 OFFSET $2', [limit, offset], (err, results) => {
            if(err) {
                reject(err)
            }
            const rows = results.rows
            resolve(rows)
        })
    })
}

const getMoviesById = (params) => {
    return new Promise((resolve, reject) => {
        const id = parseInt(params)
        pool.query('select * from movies where id = $1', [id], (err, results) => {
            if(err) {
                reject(err)
            }
            const rows = results.rows
            resolve(rows)
        })
    })
}

const editMovies = (params) => {
    return new Promise((resolve, reject) => {
        const { id, title, genres, year } = params;
        pool.query('update movies set title = $1, genres = $2, year = $3 where id = $4', [title, genres, year, id], (err, results) => {
            if(err) {
                reject(err)
            }
            resolve("Data successfully edited...")
        })
    })
}

const addMovies = (params) => {
    return new Promise((resolve, reject) => {
        const { id, title, genres, year } = params;
        pool.query('insert into movies (id, title, genres, year) values ($1, $2, $3, $4)', [id, title, genres, year], (err, results) => {
            if(err) {
                reject(err)
            }
            resolve("Data successfully added...")
        })
    })
}

const deleteMovies = (params) => {
    return new Promise((resolve, reject) => {
        const id = parseInt(params)
        pool.query('DELETE FROM movies WHERE id = $1', [id], (err, results) => {
            if(err) {
                reject(err)
            }
            resolve("Data successfully deleted...")
        })
    })
}

const addPhoto = (params) => {
    return new Promise((resolve, reject) => {
        const { id, file } = params;
        pool.query('update movies set photo = $1 where id = $2', [file, id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve("Photo successfully added...");
            }
        });
    })
}
module.exports = {
    getMovies,
    getMoviesById,
    editMovies,
    addMovies,
    deleteMovies,
    addPhoto,
}