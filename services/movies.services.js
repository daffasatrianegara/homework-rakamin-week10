const { moviesRepo } = require('../repositories')

const getMovies = async (res) => {
    const response = await moviesRepo.getMovies(res)
    return response
}

const getMoviesById = async (id) => {
    if(!id) {
        return Promise.reject(new Error("Id null..."))
    }
    const response = await moviesRepo.getMoviesById(id)
    return response
}

const editMovies = async (data) => {
    const { id, title, genres, year } = data
    if(!id) {
        return Promise.reject(new Error("Id null..."))
    }
    const response = await moviesRepo.editMovies({ id, title, genres, year })
    return response
}

const addMovies = async (data) => {
    const { id, title, genres, year } = data;
    if (!id || !title || !genres || !year) {
        return Promise.reject(new Error("Some values are missing..."));
    }
    const response = await moviesRepo.addMovies({ id, title, genres, year });
    return response;
}


const deleteMovies = async (id) => {
    if(!id) {
        return Promise.reject(new Error("Id null..."))
    }
    const response = await moviesRepo.deleteMovies(id)
    return response
}

const addPhoto = async (data) => {
    const { id, file } = data;
    if (!id) {
        return Promise.reject(new Error("Id is missing..."));
    } else if (!file) {
        return Promise.reject(new Error("File is missing..."));
    }
    const response = await moviesRepo.addPhoto({ id, file });
    return response;
}

module.exports = {
    getMovies,
    getMoviesById,
    editMovies,
    addMovies,
    deleteMovies,
    addPhoto,
}