const estudiantesModel = require('../models_dataaccess/estudianteModel');

const getAllEstudiantes = async function (req, res) {
    try {
        // Espera a que la función asíncrona se resuelva
        const estudiantes = await estudiantesModel.findAllStudents();

        // Verifica si la lista está vacía
        if (estudiantes.length === 0) {
            return res.status(404).json({ message: 'No se encontraron estudiantes' });
        }

        // Devuelve la lista de estudiantes
        return res.status(200).json(estudiantes);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al obtener los estudiantes' });
    }
};

const getEstudiante = async function (req, res) {
    datos = await estudiantesModel.findByMatricula(req.params.matricula);
    if (datos) {
        res.status(200).
            json(datos);
    } else {
        res.status(404).
            json({ error: `No se encontro estudiante con matricula: ${req.params.matricula}` });
    }
};

const deleteEstudiante = async function (req, res) {
    const e = await estudiantesModel.erase(req.params.matricula);
    if (e) {
        res.status(200).json(e);
    } else {
        res.status(404).json({ error: `No se encontro estudiante con matricula: ${req.params.matricula}` });
    }
}

const saveEstudiante = async function (req, res) {
    const nuevoEstudiante = req.body;
    try {
        // Verifica si ya existe un estudiante con la misma matrícula
        const comprobar = await estudiantesModel.findByMatricula(nuevoEstudiante.matricula);

        if (comprobar) {
            return res.status(409).json({ error: `Ya existe un estudiante con la matrícula: ${nuevoEstudiante.matricula}` }); // Conflicto
        }

        // Crea el nuevo estudiante en la base de datos
        const nuevoRegistro = await estudiantesModel.save(nuevoEstudiante);

        // Retorna el nuevo estudiante creado con status 201 (creado)
        res.status(201).json(nuevoRegistro);
    } catch (error) {
        console.error("Error al agregar el estudiante:", error);
        res.status(500).json({ error: "Error interno del servidor al agregar el estudiante" });
    }
};

const updateEstudiante = async function (req, res) {
    const updEstudiante = await estudiantesModel.update(req.params.matricula, req.body);
    if (updEstudiante){
        res.status(201).json(updEstudiante); // Retorna el nuevo estudiante creado con status 201 (creado)
    } else {
        res.status(500).json({ error: "Error al actualizar el estudiante" });
    }
}

exports.getAllEstudiantes = getAllEstudiantes;
exports.getEstudiante = getEstudiante;
exports.deleteEstudiante = deleteEstudiante;
exports.saveEstudiante = saveEstudiante;
exports.updateEstudiante = updateEstudiante;