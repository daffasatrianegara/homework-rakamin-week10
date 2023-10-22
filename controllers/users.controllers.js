const { usersService } = require('../services')

const getUser = async (req, res) => {
    const page = req.query.page
    const limit = req.query.limit
    try {
        const result = await usersService.getUsers({
            page : page,
            limit : limit
        })
        res.json(result)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const getUserById = async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const result = await usersService.getusersById(id)
        res.json(result)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const editUser = async (req, res) => {
    const { email, gender, password, role } = req.body
    const id = parseInt(req.params.id)
    try {
        const result = await usersService.editUsers({ id, email, gender, password, role })
        res.json(result)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const deleteUser = async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const result = await usersService.deleteUsers(id)
        res.json(result)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

module.exports = {
    getUser,
    getUserById,
    editUser,
    deleteUser,
}