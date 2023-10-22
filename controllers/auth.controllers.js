const { authService } = require('../services')

const register = async (req, res) => {
    const { id, email, gender, password, role } = req.body
    try {
        const result = await authService.register({ id, email, gender, password, role })
        res.json(result)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const result = await authService.login({ email, password })
        res.json(result)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

module.exports = {
    register,
    login,
}