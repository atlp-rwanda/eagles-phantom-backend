import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class Bus extends Model {
  }
  Bus.init({
    busPlate: DataTypes.STRING,
    busStatus: DataTypes.STRING,
    busLocation: DataTypes.STRING,
    busCompany: DataTypes.STRING,
    busSeats: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Bus',
  });
  return Bus;
};
 