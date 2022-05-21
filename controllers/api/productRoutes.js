const router = require("express").Router();

const Product = require("../../models/Product");


// Add new product
router.post("/newAdd", (req, res) => {
  let { title, price, description} = req.body;
  let errors = [];
  console.log(req.body)
  if (!title) {
    errors.push({ text: "Please add Product name" });
  }
  if (!description) {
    errors.push({ text: "Please add a description" });
  }

  if (!price) {
    errors.push({ text: "Please add Price" });
  }

//   any errors
  if (errors.length > 0) {
    res.render("add", {
      errors,
       title,
      price,
      description,
    });
  } else {
    if (!price) {
      price = "";
    } else {
      price = `£${price}`;
    }
  }

 

  
  Product.create({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
 
  })
    .then((Product) => res.status(200).json(Product))
    .catch((err) => console.log(err));
});


module.exports = router;
