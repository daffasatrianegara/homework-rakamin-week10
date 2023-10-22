const { authControllers } = require('../controllers')
const { authMiddlewares } = require('../middlewares')
const express = require("express")
const { Router } = require("express")
const router = Router()

router.post('/users/login', authControllers.login)
router.post('/users/register', authMiddlewares.authToken, authControllers.register)
router.get('/verify/users', authMiddlewares.authToken , (req, res) => {
    res.send('user berhasil login...')
})
module.exports = router