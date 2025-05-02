
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

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

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://nep:<db_password>@nep.6xuuu42.mongodb.net/?retryWrites=true&w=majority&appName=nep"; {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB error:", err));

const User = require("./models/User");

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const newUser = new User({ email, password });
  await newUser.save();
  res.send("Signup successful!");
});
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
