const db = require("../models/Connection.js");
Product = db.tableProductObject;

var productAdd = async (req, res) => {
  var data = await Product.create({
    ProductId: req.body.ProductId,
    ProductName: req.body.ProductName,
    ProductPrice: req.body.ProductPrice,
    ProductDescription: req.body.ProductDescription,
    ProductOwnCompany: req.body.ProductOwnCompany,
    UserId: req.body.UserId,
  });

  res.status(200).json(data);
};


module.exports = { productAdd };
