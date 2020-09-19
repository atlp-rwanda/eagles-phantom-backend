module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'Buses',
    [
      {
        busPlate: 'RAD 466 c',
        busStatus: 'active',
        busLocation: 'Remera',
        busCompany: 'KBS',
        busSeats: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface) => queryInterface.bulkDelete('Buses', null, {}),
};
