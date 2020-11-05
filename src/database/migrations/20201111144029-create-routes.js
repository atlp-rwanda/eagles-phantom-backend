module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Routes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      routeID: {
        type: Sequelize.INTEGER,
      },
      direction: {
        type: Sequelize.STRING,
      },
      from: {
        type: Sequelize.STRING,
      },
      to: {
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
    await queryInterface.dropTable('Routes');
  },
};
