const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Airplanes extends Model {
    static associate(models) {
      // define associations if any
    }
  }

  Airplanes.init(
    {
      modelno: {
        type: DataTypes.STRING,
        allowNull: false,  // You can add constraints here if necessary
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: true, // Adjust as needed
      },
      company: {
        type: DataTypes.STRING,
        allowNull: true, // Adjust as needed
      },
    },
    {
      sequelize,
      modelName: 'Airplanes',
    }
  );

  return Airplanes;
};
