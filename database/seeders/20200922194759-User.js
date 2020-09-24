

module.exports = {
  up: async (queryInterface, Sequelize) =>queryInterface.bulkInsert(
    'Users',
  [
   {
        name: 'Innocent Ngenzi',
        email: 'ngenzi@hirwa.com',
        phone:'07878667345',
        createdAt: new Date(),
        updatedAt: new Date(),
   },
   {
    name: 'John Peter',
    email: 'pjohn@hirwa.com',
    phone:'07878663445',
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
