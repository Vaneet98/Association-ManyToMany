module.exports = (sequelize, DataTypes) => {
  const prod = sequelize.define(
    "products",
    {
      ProductId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
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
      UserId: {
        type: DataTypes.INTEGER,
        references: {
          model: "customers",
          col: "id",
        },
      },
    },
    {
      tableName: "ProductDetail",
    }
  );
  return prod;
};

