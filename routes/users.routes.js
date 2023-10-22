const { usersControllers } = require('../controllers')
const { authMiddlewares } = require('../middlewares')
const express = require("express")
const { Router } = require("express")
const router = Router()

router.get('/users', authMiddlewares.authToken, usersControllers.getUser)
router.get('/users/:id', authMiddlewares.authToken, usersControllers.getUserById)
router.put('/users/:id', authMiddlewares.authToken, usersControllers.editUser)
router.delete('/users/:id', authMiddlewares.authToken, usersControllers.deleteUser)

module.exports = router