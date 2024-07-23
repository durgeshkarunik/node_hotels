const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send(
    "welcome to my world how i can assist you, we have list of everthing "
  );
});
// POST route to add aperson

const personRoutes = require("./routes/personRoutes");
app.use("/person", personRoutes);

const menuItemRoutes = require("./routes/menuItemRoutes");
app.use("/menu", menuItemRoutes);


app.listen(PORT, () => {
  console.log("listening on port 3000");
});
