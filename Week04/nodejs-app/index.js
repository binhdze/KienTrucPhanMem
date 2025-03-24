const express = require("express");
const app = express();

app.use("/", (req, res) => {
  return res.send("Hello docker!");
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
