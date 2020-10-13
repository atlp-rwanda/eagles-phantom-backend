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
        firstname: 'Allybomayee',
        lastname: 'Babalao',
        email: 'el.ally741@gmail.com',
        password: '$2b$10$KEVMx4HkwC0UtVT6Ev9M7ua0ODQfKqA1BoAxcz9p/tq3AQQYs8EJ6',
        dateofbirth: '1/1/2020',
        gender: 'Male',
        address: 'Kanombe',
        role: 'operator',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

       {
        id: 3,
        firstname: 'Willy ',
        lastname: 'Smith',
        email: 'will@gmail.com',
        password: '$2y$12$73vIIygHIADwU/m.DVOPIuqTI7T0jZSYsNbrQjK6HrSFoddtiioIq',
        dateofbirth: '1/1/2020',
        gender: 'Male',
        address: 'Kanombe',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
       },
      {
        id: 12,
        firstname: 'Will',
        lastname: 'John',
        email: 'will@gmail.com',
        password: '$2y$12$RdAQ9sf4r2BM2k.qfo94..324UEcl0XLF0vCkVZuNVS3xQfKchcTq',
        dateofbirth: '1/1/2020',
        gender: 'Male',
        address: 'Kanombe',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
        {
        id: "19243982-8a53-4d63-928e-ab6282247bb1",
        email: "mugema8@gmail.com",
        password:"$2b$10$w7q8hFgkKfuhXw3og.Uau.jkY3XfP94GnhJpWvuBBmWJioEA0669y",
        firstname: "Henry",
        lastname: "ntare",
        dateofbirth: "1/1/2000",
        gender: "1/1/2000",
        address: "Kabeza",
        role: "driver",
        createdAt: new Date(),
        updatedAt: new Date(),
},
      {
        id: 9,
        firstname: 'Atalaku',
        lastname: 'Convoyeur',
        email: 'el.ally742dereva@gmail.com',
        password: '$2b$10$KEVMx4HkwC0UtVT6Ev9M7ua0ODQfKqA1BoAxcz9p/tq3AQQYs8EJ6',
        dateofbirth: '1/1/2020',
        gender: 'Male',
        address: 'Kanombe',
        role: 'operator',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 13,
        firstname: 'Allybomayee',
        lastname: 'Babalao',
        email: 'el.ally741@gmail.com',
        password: '$2b$10$KEVMx4HkwC0UtVT6Ev9M7ua0ODQfKqA1BoAxcz9p/tq3AQQYs8EJ6',
        dateofbirth: '1/1/2020',
        gender: 'Male',
        address: 'Kanombe',
        role: 'operator',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        firstname: 'bruce',
        lastname: 'Mark',
        email: 'bruce@gmail.com',
        password: '$2y$12$RvYDo5UzcJfODxQ.RezrFuI71lqW4wtL7BmSkx9ADfkwmiDNiXxY.',
        dateofbirth: '1/1/2020',
        gender: 'Male',
        address: 'Kanombe',
        role: 'driver',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        firstname: 'Jennie',
        lastname: 'Alice',
        email: 'jennie@gmail.com',
        password: '$2y$12$RdAQ9sf4r2BM2k.qfo94..324UEcl0XLF0vCkVZuNVS3xQfKchcTq',
        dateofbirth: '1/1/2020',
        gender: 'Male',
        address: 'Kanombe',
        role: 'driver',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};