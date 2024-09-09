const { render } = require("ejs");
const express = require("express");
const app = express();
const port = 3900;
const path = require("path");
const bcrypt = require("bcrypt");

require("./db/conn");

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

const userCollection = require("./model/schema");
// app.get("/", (req, res) => {
//   res.send("<h1>Welcome to backend project</h1>");
// });

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/index", (req, res) => {
  res, render("index");
});

// Product Page

app.get("/partials/Product", (req, res) => {
  res.render("partials/Product");
});

// about section page

app.get("/partials/About", (req, res) => {
  res.render("partials/About");
});

// contact page

app.get("/partials/Contact", (req, res) => {
  res.render("partials/Contact");
});

//skin care products prime

app.get("/partials/Products", (req, res) => {
  res.render("partials/Products");
});

// Item Store Cart

app.get("/partials/AddToCart", (req, res) => {
  res.render("partials/AddToCart");
});

// wishlist page
app.get("/partials/WishList", (req, res) => {
  res.render("partials/WishList");
});

// Register Page
app.post("/signup", async (req, res) => {
  const data = {
    name: req.body.username,
    password: req.body.password,
  };

  const existingUser = await userCollection.findOne({
    name: data.name,
  });

  if (existingUser) {
    res.send("User already exists. Please choose a different username.");
  } else {
    // hash password
    const saltRecords = 10;
    const hashedPassword = await bcrypt.hash(data.password, saltRecords);

    data.password = hashedPassword;

    const userData = await userCollection.insertMany(data);
    console.log(userData);
  }
});

app.post("/login", async (req, res) => {
  try {
    // user name
    const userNameCheck = await userCollection.findOne({
      name: req.body.username,
    });

    if (!userNameCheck) {
      res.send("user name cannot found");
    }

    // user password
    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      userNameCheck.password
    );

    //
    if (isPasswordMatch) {
      res.render("index");
    } else {
      req.send("wrong password");
    }
  } catch {
    console.log("Wrong details");
  }
});
app.listen(port, (req, res) => {
  console.log(`server listening at port of ${port}`);
});
