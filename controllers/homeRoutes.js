const express = require("express");
const router = express.Router();
const { Product, User } = require("../models");
const withAuth = require("../utils/auth");
const Sequelize = require("sequelize");
var exphbs = require("express-handlebars");

router.get("/", async (req, res) => {
  try {
    // Get all products
    const productsData = await Product.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });


    const products =productsData.map((product) => product.get({ plain: true }));

    
    res.render("index", {
      products,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get product list
router.get("/allProducts", (req, res) => {
  Product.findAll()
    .then((products) =>
      res.render("products", {
        products,
        logged_in: req.session.logged_in,
      })
    )
    .catch((err) => console.log(err));
});




router.get("/addProducts", (req, res) => {
  // if (!req.session.logged_in) {
  //   res.redirect('/login');
  //   return;
  // }
  res.render("add", {
    logged_in: req.session.logged_in,
  });
});


// Login route
router.get("/login", (req, res) => {

  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});




router.get('/', (req, res) => {
  // find all products and Users
  Product.findAll({
    include: [{ model: Product }],
  })
    .then((Response) => {
      res.json(Response);
    })
    .catch((err) => {
      res.json(err);
    });
});

//GET one product
router.get('/:id', (req, res) => {
  // find a single product by its `id`
  Product.findOne({
    where: {
      id: req.params.id,
    }
    .then((Response) => {
      res.json(Response);
    })
    .catch((err) => {
      res.json(err);
    })
});


//UPDATE
router.put('/:id', (req, res) => {
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
})
.then((updatedProduct) => res.json(updatedProduct))
.catch((err) => {
 res.status(400).json(err);
});
});

//DELETE
router.delete('/:id', (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((Response) => {
      res.json(Response);
    })
    .catch((err) => {
      res.json(err);
    });
});












module.exports = router;
