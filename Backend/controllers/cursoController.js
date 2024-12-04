const cursosModel = require('../models_dataaccess/cursoModel');

const getAllCursos = async function (req, res) {
    try {
        // Espera a que la función asíncrona se resuelva
        const cursos = await cursosModel.findAllCursos();

        // Verifica si la lista está vacía
        if (cursos.length === 0) {
            return res.status(404).json({ message: 'No se encontraron cursos' });
        }

        // Devuelve la lista de estudiantes
        return res.status(200).json(cursos);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al obtener los cursos' });
    }
};

const getCurso = async function (req, res) {
    datos = await cursosModel.findByClave(req.params.clave);
    if (datos) {
        res.status(200).
            json(datos);
    } else {
        res.status(404).
            json({ error: `No se encontro cursos con clave: ${req.params.clave}` });
    }
};

const deleteCurso = async function (req, res) {
    const e = await cursosModel.erase(req.params.clave);
    if (e) {
        res.status(200).json(e);
    } else {
        res.status(404).json({ error: `No se encontro cursos con clave: ${req.params.clave}` });
    }
}

const saveCurso = async function (req, res) {
    const newCurso = req.body;
    try {
        // Verifica si ya existe un estudiante con la misma matrícula
        const comprobar = await cursosModel.findByClave(newCurso.clave);

        if (comprobar) {
            return res.status(409).json({ error: `Ya existe un cursos con clave: ${newCurso.clave}` }); // Conflicto
        }

        // Crea el nuevo estudiante en la base de datos
        const nuevoRegistro = await cursosModel.save(newCurso);

        // Retorna el nuevo estudiante creado con status 201 (creado)
        res.status(201).json(nuevoRegistro);
    } catch (error) {
        console.error("Error al agregar el curso:", error);
        res.status(500).json({ error: "Error interno del servidor al agregar el curso" });
    }
};

const updateCurso = async function (req, res) {
    const updCurso = await cursosModel.update(req.params.clave, req.body);
    if (updCurso){
        res.status(201).json(updCurso); // Retorna el nuevo estudiante creado con status 201 (creado)
    } else {
        res.status(500).json({ error: "Error al actualizar el curso" });
    }
}

exports.getAllCursos = getAllCursos;
exports.getCurso = getCurso;
exports.deleteCurso = deleteCurso;
exports.saveCurso = saveCurso;
exports.updateCurso = updateCurso;