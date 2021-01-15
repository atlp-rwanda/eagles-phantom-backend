module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'Buses',
    [
      {
        driver: 'Jean Mary',
        busCompany: 'RFTC',
        busPlate: 'RAA987A',
        busStatus: 'active',
        busLocation: 'Remera',
        type: 'coaster',
        busSeats: 6,
        routeId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        driver: 'Jean Celine',
        busCompany: 'RFTChn',
        busPlate: 'RAA987A',
        busStatus: 'active',
        busLocation: 'Remera',
        type: 'coaster',
        busSeats: 73,
        routeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        driver: 'Jean Jeanne',
        busCompany: 'Royal',
        busPlate: 'RAA827A',
        busStatus: 'active',
        busLocation: 'Remera',
        type: 'coaster',
        busSeats: 128,
        routeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        driver: 'Jean D`arc',
        busCompany: 'RFTC',
        busPlate: 'RAA907A',
        busStatus: 'active',
        busLocation: 'Remera',
        type: 'coaster',
        busSeats: 57,
        routeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        driver: 'Jean Anne',
        busCompany: 'RFTC',
        busPlate: 'RAA987A',
        busStatus: 'active',
        busLocation: 'Remera',
        type: 'coaster',
        busSeats: 10,
        routeId: 5,
        userId:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface) => queryInterface.bulkDelete('Buses', null, {}),
};
