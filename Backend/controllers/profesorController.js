const profesorModel = require('../models_dataaccess/profesorModel');

const getAllProfesores = async function (req, res) {
    try {
        // Espera a que la función asíncrona se resuelva
        const profesores = await profesorModel.findAllProfesors();

        // Verifica si la lista está vacía
        if (profesores.length === 0) {
            return res.status(404).json({ message: 'No se encontraron profesores' });
        }

        // Devuelve la lista de estudiantes
        return res.status(200).json(profesores);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al obtener los profesores' });
    }
};

const getProfesor = async function (req, res) {
    datos = await profesorModel.findByNoEmpleado(req.params.noempleado);
    if (datos) {
        res.status(200).
            json(datos);
    } else {
        res.status(404).
            json({ error: `No se encontro profesor con No. empleado: ${req.params.noempleado}` });
    }
};

const deleteProfesor = async function (req, res) {
    const p = await profesorModel.erase(req.params.noempleado);
    if (p) {
        res.status(200).json(p);
    } else {
        res.status(404).json({ error: `No se encontro profesor con No. empleado: ${req.params.noempleado}` });
    }
}

const saveProfesor = async function (req, res) {
    const newProfesor = req.body;
    try {
        // Verifica si ya existe un estudiante con la misma matrícula
        const comprobar = await profesorModel.findByNoEmpleado(newProfesor.noempleado);

        if (comprobar) {
            return res.status(409).json({ error: `Ya existe un estudiante con la matrícula: ${newProfesor.noempleado}` }); // Conflicto
        }

        // Crea el nuevo estudiante en la base de datos
        const nuevoRegistro = await profesorModel.save(newProfesor);

        // Retorna el nuevo estudiante creado con status 201 (creado)
        res.status(201).json(nuevoRegistro);
    } catch (error) {
        console.error("Error al agregar al profesor:", error);
        res.status(500).json({ error: "Error interno del servidor al agregar al profesor" });
    }
};

const updateProfesor = async function (req, res) {
    const updProfesor = await profesorModel.update(req.params.noempleado, req.body);
    if (updProfesor){
        res.status(201).json(updProfesor); // Retorna el nuevo estudiante creado con status 201 (creado)
    } else {
        res.status(500).json({ error: "Error al actualizar al profesor" });
    }
}

exports.getAllProfesores = getAllProfesores;
exports.getProfesor = getProfesor;
exports.deleteProfesor = deleteProfesor;
exports.saveProfesor = saveProfesor;
exports.updateProfesor = updateProfesor;