
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
