'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      id: 1,
      name: 'John Oliver',
      email: 'gosho_slqpoto@accedia.com',
      age: 33
    }, {
      id: 2,
      name: 'Pesho Qkiq',
      email: 'pesho_proteina@accedia.com',
      age: 25
    }, {
      id: 3,
      name: 'Gosho Dulgiq',
      email: 'neshto@accedia.com',
      age: 21
    }])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
