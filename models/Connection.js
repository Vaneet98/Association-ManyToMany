const { Sequelize, DataTypes, HasOne } = require("sequelize");
const sequelize = new Sequelize("assocation", "root", "Vaneet5509@", {
  host: "localhost",
  dialect: "mysql",
  port: "3307",
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log("Error", err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.tableUserObject = require("./tableUser")(sequelize, DataTypes);
db.tableProductObject = require("./tableProduct")(sequelize, DataTypes);

//-------------------for customer and items files------------------------------
db.tableCustomerObject = require("./Customer")(sequelize, DataTypes);
db.tableItmsObject = require("./Items")(sequelize, DataTypes);

//----------------------comman table call--------------------------------------
db.custItmsObject = require("./custitmes")(sequelize, DataTypes);

//One to one relation by hasOne method
/* db.tableUserObject.hasOne(db.tableProductObject, {
  foreignKey: "UserId",
  as: "ProductDetails",
});
 */
//------------------------one to one relation by belongsTo method----------------------------
db.tableProductObject.hasOne(db.tableUserObject, {
  foreignKey: "UserId",
  as: "UsersDetails",
});

//------------------------one to many relation------------------------------------------------
db.tableUserObject.hasMany(db.tableProductObject, {
  foreignKey: "UserId",
  as: "ProductDetails",
});

//---------------------------Many ot many relation---------------------------------------------
db.tableCustomerObject.belongsToMany(db.tableItmsObject, {
  through: "custitmes",
});
db.tableItmsObject.belongsToMany(db.tableCustomerObject, {
  through: "custitmes",
});

db.sequelize.sync({ force: false }).then(() => {
  console.log("Yes sync");
});
module.exports = db;
