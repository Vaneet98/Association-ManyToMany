const express = require("express");
const router = express.Router();
const UserCtrl = require("../controllerss/UserController");
const ProductCtrl = require("../controllerss/ProductController");
//------------For Many to many --------------------
const BuyerCtrl = require("../controllerss/BuyerController");
const ItemsCtrl = require("../controllerss/ItemsController");

const commanCtrl = require("../controllerss/commantableAddController");

//--------------------All UserController methode call here.-----------------------
router.post("/addUser", UserCtrl.userAdd);

//**************One to One method call**************************
router.get("/detailsOneToOne", UserCtrl.oneToOne);

//********************One to Many method*****************************
router.get("/detailsOneToMany", UserCtrl.oneToMany);


//------------------------------All ProductController methode call here.-------------------------
router.post("/productAdd", ProductCtrl.productAdd);

//*************************Add Itmes details****************************************
router.post("/itemsAdd", ItemsCtrl.itemsAdd);


//--------------------------All BuyerController methode call here.--------------------------------
router.post("/addBuyer", BuyerCtrl.buyerAdd);

//call common table
router.post("/commans", commanCtrl.commAdd);

router.get("/comman", (req, res) => {
  res.send("Comman table");
});
//*************Many to Many method****************************
 router.get("/detailsManyToMany", BuyerCtrl.ManyToMany); 

module.exports = router;
