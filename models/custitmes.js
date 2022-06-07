module.exports = (sequelize, DataTypes) => {
    const Custitems = sequelize.define(
      "custitmes",
      {
        ProductId: {
            type: DataTypes.INTEGER,
            references: {
              model: "ItemsDet",
              col: "id",
            },
          },
         BuyerId: {
          type: DataTypes.INTEGER,
          references: {
            model: "BuyerCust",
            col: "id",
          },
        }, 
      },
      {
        tableName: "custitmes",
      }
    );
    return Custitems;
  };
  