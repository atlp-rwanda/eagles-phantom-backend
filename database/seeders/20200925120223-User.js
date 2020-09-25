

module.exports = {
  up: (queryInterface, Sequelize) =>queryInterface.bulkInsert(
    'Users',
  [
    {
      name:"willy Cliff",
      email:"willy@gmail.com",
      phone:"078966589",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
  {},
),
  down:(queryInterface, Sequelize) =>queryInterface.bulkDelete('Users',null,{}),
};
