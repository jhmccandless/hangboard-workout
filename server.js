const express = require("express");
const app = express();
const port = process.env.PORT || 3785;

app.get("/", (req, res) => {
  res.send(`express hello`);
});

app.listen(port, () => {
  console.log(`port ${port}`);
});
