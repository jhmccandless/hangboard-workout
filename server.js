const express = require("express");
const app = express();
const port = 3785;

app.get("/", (req, res) => {
  res.send(`express hello`);
});

app.listen(port, () => {
  console.log(`port ${port}`);
});
