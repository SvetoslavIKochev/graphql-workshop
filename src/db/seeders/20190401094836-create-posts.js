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
    return queryInterface.bulkInsert('Posts',
      [{
        id: 1,
        title: 'Pesho otide na pochivka',
        body: 'neznaino kude',
        published: true,
        author_id: 1
      },
      {
        id: 2,
        title: 'Testing titles bulshit',
        body: 'Bulshits are everywhere',
        published: true,
        author_id: 1
      },
      {
        id: 3,
        title: 'Accedia flames everyone',
        body: 'Pesho frame everyone up against each other',
        published: false,
        author_id: 2
      }]
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
