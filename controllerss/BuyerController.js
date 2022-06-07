const db = require("../models/Connection.js");

const Users = db.tableCustomerObject;
const Items = db.tableItmsObject;
var buyerAdd = async (req, res) => {
  let data = await Users.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    contact: req.body.contact,
    address: req.body.address,
  });

  res.status(200).json(data);
};
//Many to Many table
var ManyToMany = async (req, res) => {
  let data = await Users.findAll({
    attributes: ["firstName", "lastName", "contact"],
     include: [
      {
        model: Items,
        //attributes: ["ProductName", "ProductPrice"],
      },
    ],
  });
  res.status(200).json(data);
};
module.exports = { buyerAdd, ManyToMany };
