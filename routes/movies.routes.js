const movieControllers = require('../controllers')
const express = require("express");
const multer = require("multer");
const path = require("path");
const { Router } = require("express");
const disk = require('../middlewares');
const router = Router()
const uploadPhoto = multer({ storage: disk.diskStrorage }).single("photo");


router.get('/movies', movieControllers.getMovie)
router.get('/movies/:id', movieControllers.getMovieById)
router.post('/movies', movieControllers.addMovie)
router.put('/movies/:id', movieControllers.editMovie)
router.delete('/movies/:id', movieControllers.deleteMovie)
router.put('/movies/photo/:id', uploadPhoto, movieControllers.uploadPhoto);
router.use("/movies/photo", express.static(path.join(__dirname, "../upload")));

module.exports = router