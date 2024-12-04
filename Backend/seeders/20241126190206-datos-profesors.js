'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try{
      await queryInterface.bulkInsert('Profesors', [
        {
          nombre: 'Pedro Sanchez',
          noempleado: 1001,
          semestreIngresado: '2009-2'
        },
        {
          nombre: 'Maria Fernandez',
          noempleado: 1002,
          semestreIngresado: '2013-1'
        },
        {
          nombre: 'Lois Perez',
          noempleado: 1003,
          semestreIngresado: '2014-2'
        },
        {
          nombre: 'Yassania Espinoza',
          noempleado: 1004,
          semestreIngresado: '2022-2'
        },
        {
          nombre: "María López",
          noempleado: 1005,
          semestreIngresado: "2010-1"
      },
      {
          nombre: "Juan Pérez",
          noempleado: 1006,
          semestreIngresado: "2011-2"
      },
      {
          nombre: "Ana Rodríguez",
          noempleado: 1007,
          semestreIngresado: "2012-1"
      },
      {
          nombre: "Luis Gómez",
          noempleado: 1008,
          semestreIngresado: "2013-2"
      },
      {
          nombre: "Carmen Ortega",
          noempleado: 1009,
          semestreIngresado: "2014-1"
      },
      {
          nombre: "Diego Vargas",
          noempleado: 1010,
          semestreIngresado: "2015-2"
      },
      {
          nombre: "Sofía Martínez",
          noempleado: 1011,
          semestreIngresado: "2016-1"
      },
      {
          nombre: "Carlos Ruiz",
          noempleado: 1012,
          semestreIngresado: "2017-2"
      },
      {
          nombre: "Laura Fernández",
          noempleado: 1013,
          semestreIngresado: "2018-1"
      }
      ], {});
    } catch(error){
      console.log(error);
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Profesors', null, {});
  }
};
