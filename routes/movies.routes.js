const { movieControllers } = require('../controllers')
const { authMiddlewares } = require('../middlewares')
const express = require("express");
const multer = require("multer");
const path = require("path");
const { Router } = require("express");
const { diskMiddlewares } = require('../middlewares');
const router = Router()
const uploadPhoto = multer({ storage: diskMiddlewares.diskStrorage }).single("photo");


router.get('/movies', authMiddlewares.authToken, movieControllers.getMovie)
router.get('/movies/:id', authMiddlewares.authToken, movieControllers.getMovieById)
router.post('/movies', authMiddlewares.authToken, movieControllers.addMovie)
router.put('/movies/:id', authMiddlewares.authToken, movieControllers.editMovie)
router.delete('/movies/:id', authMiddlewares.authToken, movieControllers.deleteMovie)
router.put('/movies/photo/:id', authMiddlewares.authToken, uploadPhoto, movieControllers.uploadPhoto);
router.use("/movies/photo", authMiddlewares.authToken, express.static(path.join(__dirname, "../upload")));

module.exports = router