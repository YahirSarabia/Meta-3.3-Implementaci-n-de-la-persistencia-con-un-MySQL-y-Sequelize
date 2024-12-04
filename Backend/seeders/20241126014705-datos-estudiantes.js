'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Estudiantes', [
      {
        nombre: 'Juan Camaney',
        matricula: 1170001,
        semestreIngresado: '2016-2',
        creditosCursados: 200
      },
      { 
        nombre: 'Lupita López', 
        matricula: 1170002, 
        semestreIngresado: '2017-2', 
        creditosCursados: 100 
      },
      { 
        nombre: 'Pepe Toño', 
        matricula: 1170003, 
        semestreIngresado: '2018-2', 
        creditosCursados: 50 
      },
      { 
        nombre: 'Marco Gonzales', 
        matricula: 1170004, 
        semestreIngresado: '2019-2', 
        creditosCursados: 25 
      },
      { 
        nombre: 'Luis Cuevas', 
        matricula: 1170005, 
        semestreIngresado: '2020-2', 
        creditosCursados: 13 
      },
      {
        nombre: 'Ana María',
        matricula: 1170006,
        semestreIngresado: '2021-2',
        creditosCursados: 10
    },
    {
        nombre: 'Carlos Ramírez',
        matricula: 1170007,
        semestreIngresado: '2020-1',
        creditosCursados: 90
    },
    {
        nombre: 'Elena Morales',
        matricula: 1170008,
        semestreIngresado: '2019-1',
        creditosCursados: 120
    },
    {
        nombre: 'Francisco López',
        matricula: 1170009,
        semestreIngresado: '2018-1',
        creditosCursados: 80
    },
    {
        nombre: 'Gabriela Torres',
        matricula: 1170010,
        semestreIngresado: '2022-1',
        creditosCursados: 15
    },
    {
        nombre: 'Hugo Sánchez',
        matricula: 1170011,
        semestreIngresado: '2021-1',
        creditosCursados: 20
    },
    {
        nombre: 'Isabel Hernández',
        matricula: 1170012,
        semestreIngresado: '2020-2',
        creditosCursados: 50
    },
    {
        nombre: 'Julio Mendoza',
        matricula: 1170013,
        semestreIngresado: '2017-2',
        creditosCursados: 200
    },
    {
        nombre: 'Karla Villalobos',
        matricula: 1170014,
        semestreIngresado: '2016-1',
        creditosCursados: 250
    },
    {
        nombre: 'Luis Martínez',
        matricula: 1170015,
        semestreIngresado: '2015-2',
        creditosCursados: 300
    }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Estudiantes', null, {});
  }
};
