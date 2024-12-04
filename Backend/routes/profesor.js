const express = require('express');
const router = express.Router();
const profesoresController = require('../controllers/profesorController');

router.use(express.json());

router.get('/profesores', profesoresController.getAllProfesores);
router.get('/profesor/:noempleado', profesoresController.getProfesor);
router.delete('/profesor/:noempleado', profesoresController.deleteProfesor);
router.post('/profesor', profesoresController.saveProfesor);
router.put('/profesor/:noempleado', profesoresController.updateProfesor);
router.patch('/profesor/:noempleado', profesoresController.updateProfesor);

module.exports = router;