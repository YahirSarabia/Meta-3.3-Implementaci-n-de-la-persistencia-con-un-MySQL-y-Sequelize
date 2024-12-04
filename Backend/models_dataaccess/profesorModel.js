const { profesor } = require('../models');

exports.findByNoEmpleado = async function(noempleado) {
    return await profesor.findOne({ where: { noempleado } });
}

exports.findAllProfesors = async function() {
    return await profesor.findAll();
}

exports.erase = async function (noempleado) {
  const e = await profesor.findOne({ where: { noempleado } });
  if (e) {
    await profesor.destroy({ where: { noempleado } });
    return e;
  } else {
    return null;
  }
}

exports.save = async function(np) {
  const newProfesor = await profesor.create({
    nombre: np.nombre,
    noempleado: np.noempleado,
    semestreIngresado: np.semestreIngresado,
  });
  return newProfesor;
}

exports.update = async function (noempleado, data) {
  // Busca el registro por Matricula
  const registro = await profesor.findOne({ where: { noempleado } });

  if (registro) {
    // Actualiza los campos del registro con los datos proporcionados
    await registro.update(data);
    // Retorna el registro actualizado
    return registro;
  } else {
    return null; // Retorna null si el registro no existe
  }
}