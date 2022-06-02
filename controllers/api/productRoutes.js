const router = require("express").Router();

const Product = require("../../models/Product");
const withAuth = require("../../utils/auth");

// Add new product
router.post("/newAdd", (req, res) => {
  let { title, price, description, image} = req.body;
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
  if (!image) {
    errors.push({ text: "Please add an image" });
  }
//   any errors
  if (errors.length > 0) {
    res.render("add", {
      errors,
       title,
      price,
      description,
      image,
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
    image: req.body.image,
  })
    .then((Product) => res.status(200).json(Product))
    .catch((err) => console.log(err));
});


router.delete("/:id", withAuth, async (req, res) => {
  try {
    const productsData = await Product.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!productsData) {
      res.status(404).json({ message: "No project found with this id!" });
      return;
    }

    res.status(200).json(productsData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
