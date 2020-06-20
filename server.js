const express = require("express");
const path = require("path");

const port = process.env.PORT || 7000;

const app = express();

app.use(express.static(__dirname));

app.use(express.static(path.join(__dirname, "public")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log("listening on port: " + port);
});
