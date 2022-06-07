module.exports = (sequelize, DataTypes) => {
  const items = sequelize.define(
    "ItemsDet",
    {
      ProductId: {
        type: DataTypes.INTEGER,
      },
      ProductName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ProductPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
        set(value) {
          this.setDataValue("ProductPrice", value + ".00");
        },
      },
      ProductDescription: {
        type: DataTypes.STRING,
      },
      ProductOwnCompany: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "ItemsDet",
    }
  );
  return items;
};
 
