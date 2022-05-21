const router = require("express").Router();

const productRoute = require("./productRoutes.js");
const userRoute = require('./userRoutes');

router.use("/products", productRoute);
router.use("/user", userRoute);

module.exports = router;