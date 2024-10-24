const express = require('express');
const router = express.Router();
const cursosController = require('../controllers/cursosController');

router.use(express.json());

router.get('/cursos', cursosController.getAllCursos);
router.get('/cursos/:id', cursosController.getCurso);
router.post('/cursos', cursosController.createCurso);
router.put('/cursos/:id', cursosController.updateCurso);
router.patch('/cursos/:id', cursosController.updateCurso);
router.delete('/cursos/:id', cursosController.deleteCurso);

/* Operaciones especiales */

// Ruta para inscribir un estudiante a un curso
router.post('/cursos/:cursoId/inscribir-estudiante/:estudianteId', cursosController.inscribirEstudiante);

// Ruta para eliminar un estudiante a un curso
router.delete('/cursos/:cursoId/eliminar-estudiante/:estudianteId', cursosController.eliminarEstudiante);

// Ruta para inscribir un profesor a un curso
router.post('/cursos/:cursoId/asociar-profesor/:profesorId', cursosController.asociarProfesor);

// Ruta para eliminar un profesor a un curso
router.delete('/cursos/:cursoId/eliminar-profesor/:profesorId', cursosController.eliminarProfesor);

module.exports = router;
