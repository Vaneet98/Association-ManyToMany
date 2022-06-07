const db = require("../models/Connection.js");
Product = db.tableItmsObject;

var itemsAdd = async (req, res) => {
  var data = await Product.create({
    ProductId: req.body.ProductId,
    ProductName: req.body.ProductName,
    ProductPrice: req.body.ProductPrice,
    ProductDescription: req.body.ProductDescription,
    ProductOwnCompany: req.body.ProductOwnCompany,
  });

  res.status(200).json(data);
};

module.exports = { itemsAdd };
