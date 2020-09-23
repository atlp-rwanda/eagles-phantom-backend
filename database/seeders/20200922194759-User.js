

module.exports = {
  up: async (queryInterface, Sequelize) =>queryInterface.bulkInsert(
    'Users',
  [
   {
        name: 'Joe Dan',
        email: 'jdan@example.com',
        phone:'0787976559',
        createdAt: new Date(),
        updatedAt: new Date(),
   }
  ],
  {},
  ),
  down: (queryInterface, Sequelize) =>queryInterface.bulkInsert('Users',null,{}),
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
};
