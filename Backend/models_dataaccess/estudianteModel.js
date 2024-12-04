const { estudiante } = require('../models');

exports.findByMatricula = async function(matricula) {
    return await estudiante.findOne({ where: { matricula } });
}

exports.findAllStudents = async function() {
    return await estudiante.findAll();
}

exports.erase = async function (matricula) {
  const e = await estudiante.findOne({ where: { matricula } });
  if (e) {
    await estudiante.destroy({ where: { matricula } });
    return e;
  } else {
    return null;
  }
}

exports.save = async function(ne) {
  const newEstudiante = await estudiante.create({
    nombre: ne.nombre,
    matricula: ne.matricula,
    semestreIngresado: ne.semestreIngresado,
    creditosCursados: ne.creditosCursados
  });
  return newEstudiante;
}

exports.update = async function (matricula, data) {
  // Busca el registro por Matricula
  const registro = await estudiante.findOne({ where: { matricula } });

  if (registro) {
    // Actualiza los campos del registro con los datos proporcionados
    await registro.update(data);
    // Retorna el registro actualizado
    return registro;
  } else {
    return null; // Retorna null si el registro no existe
  }
}