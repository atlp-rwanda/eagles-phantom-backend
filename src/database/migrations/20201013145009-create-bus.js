module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Buses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      category: {
        type: Sequelize.STRING
      },
      driver: {
        type: Sequelize.STRING,
      },
      busPlate: {
        type: Sequelize.STRING,
      },
      busStatus: {
        type: Sequelize.STRING,
      },
      busLocation: {
        type: Sequelize.STRING,
      },
      busCompany: {
        type: Sequelize.STRING,
      },
      busSeats: {
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.STRING,
      },
      routeId: {
        type: Sequelize.INTEGER,
      },
      availableSeats:{
        type: Sequelize.INTEGER,
      },
      commuters: {
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Buses');
  },
};