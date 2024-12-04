const express = require('express');
const router = express.Router();
const cursosController = require('../controllers/cursoController');

router.use(express.json());

router.get('/cursos', cursosController.getAllCursos);
router.get('/curso/:clave', cursosController.getCurso);
router.delete('/curso/:clave', cursosController.deleteCurso);
router.post('/curso', cursosController.saveCurso);
router.put('/curso/:clave', cursosController.updateCurso);
router.patch('/curso/:clave', cursosController.updateCurso);

module.exports = router;