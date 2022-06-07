module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "BuyerCust",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
          this.setDataValue("email", value + "@gmail.com");
        },
        validator: {
          //validator and constraint
          isEmail: true,
          len: [2, 30],
        },
      },
      contact: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "BuyerCust",
    }
  );
  return Users;
};

