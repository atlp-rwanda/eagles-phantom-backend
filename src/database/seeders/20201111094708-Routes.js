module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Routes',
    [
      {
        routeID: 305,
        direction: 'Kimironko - Nyabugogo',
        from: 'Kimironko',
        to: 'Nyabugogo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        routeID: 304,
        direction: 'Kacyiru - Town',
        from: 'Kacyiru',
        to: 'Town',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}),
  down: (queryInterface) => queryInterface.bulkDelete('Routes', null, {}),
};
