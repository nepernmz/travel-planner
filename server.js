
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const User = require("./models/User");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log("Login attempt:", email, password);
  res.send("Login received");
});

app.post("/signup", (req, res) => {
  const { email, password } = req.body;
  console.log("Signup:", email, password);
  res.send("Signup successful");
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const newUser = new User({ email, password });
  await newUser.save();
  res.send("Signup successful!");
});
mongoose.connect(process.env.MONGO_URI, {=
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
