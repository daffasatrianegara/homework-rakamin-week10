const { usersRepo } = require('../repositories')

const getUsers = async (res) => {
    const response = await usersRepo.getUsers(res)
    return response
}

const getusersById = async (id) => {
    if(!id) {
        return Promise.reject(new Error("Id null..."))
    }
    const response = await usersRepo.getUsersById(id)
    return response
}

const editUsers = async (data) => {
    const { id, email, gender, password, role } = data
    if(!id) {
        return Promise.reject(new Error("Id null..."))
    }
    const response = await usersRepo.editUsers({ id, email, gender, password, role })
    return response
}

const deleteUsers = async (id) => {
    if(!id) {
        return Promise.reject(new Error("Id null..."))
    }
    const response = await usersRepo.deleteUsers(id)
    return response
}

module.exports = {
    getUsers,
    getusersById,
    editUsers,
    deleteUsers
}