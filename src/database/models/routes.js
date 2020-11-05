import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class Routes extends Model {
    static associate(models) {
      Routes.hasMany(models.Buses, {
        foreignKey: 'routeId',
        as: 'Route',
        onDelete: 'CASCADE',
      });
    }
  }

  Routes.init({
    routeID: DataTypes.STRING,
    direction: DataTypes.STRING,
    from: DataTypes.STRING,
    to: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Routes',
  });
  return Routes;
};
