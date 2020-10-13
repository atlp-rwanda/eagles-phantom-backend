module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'Users',
    [
      {
        id: 1,
        firstname: 'Josh@gmail.com',
        lastname: 'Josh@gmail.com',
        email: 'Josh@gmail.com',
        password: '$2b$10$KEVMx4HkwC0UtVT6Ev9M7ua0ODQfKqA1BoAxcz9p/tq3AQQYs8EJ6',
        dateofbirth: '1/1/2020',
        gender: 'Male',
        address: 'Kanombe',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        firstname: 'Josh@gmail.com',
        lastname: 'Josh@gmail.com',
        email: 'Maestro@gmail.com',
        password: '$2b$10$KEVMx4HkwC0UtVT6Ev9M7ua0ODQfKqA1BoAxcz9p/tq3AQQYs8EJ6',
        dateofbirth: '1/1/2020',
        gender: 'Male',
        address: 'Kanombe',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
