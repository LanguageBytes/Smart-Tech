const Product = require("./Product");
const User = require("./User");

Product.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// Product.belongsToMany(User, {
//   through: {
//     model: user_id,
//     unique: false,
//   },
// });

User.hasMany(Product, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = { Product, User };