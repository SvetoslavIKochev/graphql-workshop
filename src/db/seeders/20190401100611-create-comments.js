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
    return queryInterface.bulkInsert('comments',
      [
        {
          text: 'Great post',
          author_id: 3,
          post_id: 2
        },
        {
          text: 'Mnogo tupo',
          author_id: 3,
          post_id: 2
        },
        {
          text: 'Brao mashina',
          author_id: 3,
          post_id: 3
        },
        {
          text: 'This is great article',
          author_id: 1,
          post_id: 3
        }
      ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('comments', null, {});
  }
};
