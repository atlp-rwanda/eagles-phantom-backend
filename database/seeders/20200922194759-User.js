

module.exports = {
  up: async (queryInterface, Sequelize) =>queryInterface.bulkInsert(
    'Users',
  [
   {
<<<<<<< HEAD
        name: 'Innocent Ngenzi',
        email: 'ngenzi@hirwa.com',
        phone:'07878667345',
=======
        name: 'Jidenna Hey',
        email: 'jidenna@example.com',
        phone:'0787976559',
>>>>>>> b2f69f0... chore<sequelizing>database configuration[finishes:#/17
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
