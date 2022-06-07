const db = require("../models/Connection.js");

const Comm = db.custItmsObject

var commAdd = async (req, res) => {
  let data = await Comm.create({
   ProductId: req.body.ProductId, 
   BuyerId: req.body.BuyerId
  });

  res.status(200).json(data);
};
module.exports={commAdd}