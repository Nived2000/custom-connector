const express = require("express");
const cors = require("cors");
const app = express();
const posts = require("./data");

app.use(cors());

app.get("/posts", (req, res) => {
  res.json(posts);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
