const db = require("../models/Connection.js");

const Users = db.tableUserObject;
const Product = db.tableProductObject;
var userAdd = async (req, res) => {
  let data = await Users.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    contact: req.body.contact,
    address: req.body.address,
  });

  res.status(200).json(data);
};

/* var oneToOne = async (req, res) => {
  let data = await Users.findAll({
    include: Product,
  });
  res.status(200).json(data);
};
*/
/*
//One to One by hasOne relation
//One to One relation
var oneToOne = async (req, res) => {
  let data = await Users.findAll({
    attributes: ["firstName", "lastName", "contact"],
    include: [
      {
        model:Product ,
        as: "ProductDetails",
       attributes: ["ProductName", "ProductPrice"],
      },
    ],
  });
  res.status(200).json(data);
};
 */
//One to one by belongsTo relation

//One to One relation
var oneToOne = async (req, res) => {
  let data = await Product.findAll({
    attributes: ["ProductName", "ProductPrice"],
    include: [
      {
        model: Users,
        as: "UsersDetails",
        attributes: ["firstName", "lastName", "contact"],
      },
    ],
  });
  res.status(200).json(data);
};

//One to Many table
var oneToMany = async (req, res) => {
  let data = await Users.findAll({
    attributes: ["id", "firstName", "lastName", "contact"],
    include: [
      {
        model: Product,
        as: "ProductDetails",
        attributes: ["ProductName", "ProductPrice"],
      },
    ],
  });
  res.status(200).json(data);
};
module.exports = { userAdd, oneToOne, oneToMany };
 