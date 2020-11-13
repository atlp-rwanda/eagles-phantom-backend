module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'Users',
    [
      {
        id: 1,
        firstname: 'Josh@gmail.com',
        lastname: 'Josh@gmail.com',
        email: 'Josh@gmail.com',
        password:
            '$2b$10$KEVMx4HkwC0UtVT6Ev9M7ua0ODQfKqA1BoAxcz9p/tq3AQQYs8EJ6',
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
        password:
            '$2b$10$KEVMx4HkwC0UtVT6Ev9M7ua0ODQfKqA1BoAxcz9p/tq3AQQYs8EJ6',
        dateofbirth: '1/1/2020',
        gender: 'Male',
        address: 'Kanombe',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '19243982-8a53-4d63-928e-ab6282247bb1',
        email: 'mugema8@gmail.com',
        password:
            '$2b$10$w7q8hFgkKfuhXw3og.Uau.jkY3XfP94GnhJpWvuBBmWJioEA0669y',
        firstname: 'Henry',
        lastname: 'ntare',
        dateofbirth: '1/1/2000',
        gender: '1/1/2000',
        address: 'Kabeza',
        role: 'driver',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
