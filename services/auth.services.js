const { authRepo } = require('../repositories')

const register = async (data) => {
    const { id, email, gender, password, role } = data
    if(!id || !email || !gender || !password || !role) {
        return Promise.reject(new Error("Some values are missing..."));
    }
    const response = await authRepo.register({ id, email, gender, password, role })
    return response
}

const login = async (data) => {
    const { email, password } = data
    if(!email || !password) {
        return Promise.reject(new Error("Some values are missing..."));
    }
    const response = await authRepo.login({ email, password })
    return response
}

module.exports = {
    register,
    login
}