const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Organization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Organization.hasMany(models.Slides, {
        as: 'slides',
        foreignKey: 'organizationId',
      });
    }
  }

  Organization.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.INTEGER,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      welcomeText: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      aboutUsText: {
        type: DataTypes.TEXT,
      },
      deletedAt: DataTypes.DATE,
      facebook: DataTypes.STRING,
      instagram: DataTypes.STRING,
      linkedin: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Organization',
      paranoid: true,
      timestamps: true,
    },
  );
  return Organization;
};
