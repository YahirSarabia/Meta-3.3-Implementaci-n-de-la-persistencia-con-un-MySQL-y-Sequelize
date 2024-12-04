const { curso } = require('../models');

exports.findByClave = async function(clave) {
    return await curso.findOne({ where: { clave } });
}

exports.findAllCursos = async function() {
    return await curso.findAll();
}

exports.erase = async function (clave) {
  const c = await curso.findOne({ where: { clave } });
  if (c) {
    await curso.destroy({ where: { clave } });
    return c;
  } else {
    return null;
  }
}

exports.save = async function(nc) {
  const newCurso = await curso.create({
    nombre: nc.nombre,
    clave: nc.clave,
    grupo: nc.grupo
  });
  return newCurso;
}

exports.update = async function (clave, data) {
  // Busca el registro por Matricula
  const registro = await curso.findOne({ where: { clave } });

  if (registro) {
    // Actualiza los campos del registro con los datos proporcionados
    await registro.update(data);
    // Retorna el registro actualizado
    return registro;
  } else {
    return null; // Retorna null si el registro no existe
  }
}