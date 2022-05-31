const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const bodyparser = require("body-parser");
const routes = require("./controllers");
const Handlebars = require("handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })


const sequelize = require("./config/database");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 500;

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));


app.engine(
  "handlebars",
  exphbs.engine({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use('/uploads', express.static('uploads'));
app.use(routes);




sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, console.log(`Server Started on port ${PORT}`));
});
