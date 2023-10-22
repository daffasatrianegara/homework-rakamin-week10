const { moviesService } = require('../services')

const getMovie = async (req, res) => {
    const page = req.query.page
    const limit = req.query.limit
    try {
        const result = await moviesService.getMovies({
            page : page,
            limit : limit
        })
        res.json(result)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const getMovieById = async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const result = await moviesService.getMoviesById(id)
        res.json(result)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const editMovie = async (req, res) => {
    const id = req.params.id
    const { title, genres, year } = req.body
    try {
        const result = await moviesService.editMovies({ id, title, genres, year })
        res.json(result)
    } catch(err) {
        res.status(500).send(err.message)
    }
}

const addMovie = async (req, res) => {
    const {id, title, genres, year} = req.body
    try {
        const result = await moviesService.addMovies({id, title, genres, year})
        res.json(result)
    } catch(err) {
        res.status(500).send(err.message)
    }
}

const deleteMovie = async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const result = await moviesService.deleteMovies(id)
        res.json(result)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const uploadPhoto = async (req, res) => {
    const id = parseInt(req.params.id)
    const fileDirr = req.file.path
    const fileName = req.file.filename
    try {
        const result = await moviesService.addPhoto({ id, file : fileName });
        res.json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
}



module.exports = {
    getMovie,
    getMovieById,
    editMovie,
    addMovie,
    deleteMovie,
    uploadPhoto,
}