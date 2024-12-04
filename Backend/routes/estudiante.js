const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudianteController');

router.use(express.json());

router.get('/estudiantes', estudiantesController.getAllEstudiantes);
router.get('/estudiante/:matricula', estudiantesController.getEstudiante);
router.delete('/estudiante/:matricula', estudiantesController.deleteEstudiante);
router.post('/estudiante', estudiantesController.saveEstudiante);
router.put('/estudiante/:matricula', estudiantesController.updateEstudiante);
router.patch('/estudiante/:matricula', estudiantesController.updateEstudiante);

module.exports = router;