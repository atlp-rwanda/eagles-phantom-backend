module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'Buses',
    [
      {
        busPlate: "RAB345E",
        busCompany: "Royal",
        busSeats: 29,
        userId:3,
        busStatus: 'inactive',
        busLocation: 'Zindiro',
        createdAt: new Date(),
        updatedAt: new Date(),
        type:'coaster',
        availableSeats:23,
        commuters:20
      },
 
      {
        busPlate: "RAB345F",
        busCompany: "KBS",
        busSeats: 99,
        userId:1,
        busStatus: 'active',
        busLocation: 'Zindiro',
        type:'coaster',
        availableSeats:3,
        commuters:2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface) => queryInterface.bulkDelete('Buses', null, {}),
};