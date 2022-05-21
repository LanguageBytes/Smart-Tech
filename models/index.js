const Product = require("./Product");
const User = require("./User");

Product.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Product, {
  foreignKey: "user_id",
  // onDelete: "CASCADE",
});

module.exports = { Product, User };