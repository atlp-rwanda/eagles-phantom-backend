module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'Users',
    [
      {
        email: 'Josh@gmail.com',
        password: '$2b$10$KEVMx4HkwC0UtVT6Ev9M7ua0ODQfKqA1BoAxcz9p/tq3AQQYs8EJ6',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
