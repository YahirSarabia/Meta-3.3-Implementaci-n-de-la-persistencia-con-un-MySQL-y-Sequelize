'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Cursos', [
      {
        nombre: "Electronica Avanzada",
        clave: 1234,
        grupo: 231
      },
      {
        nombre: "Microcontroladores",
        clave: 1235,
        grupo: 335
      },
      {
        nombre: "Aplicaciones web",
        clave: 1236,
        grupo: 401
      },
      {
        nombre: "Automatización",
        clave: 1237,
        grupo: 503
      },
      {
        nombre: "Redes",
        clave: 1238,
        grupo: 124
      },
      {
        nombre: "Diseño digital",
        clave: 1239,
        grupo: 312
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Cursos', null, {});
  }
};
