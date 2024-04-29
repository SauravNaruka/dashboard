const express = require("express");
const path = require("path");

const port = process.env.PORT || 8080;
const app = express();
const publicDirectoryPath = path.join(__dirname, "./client/dist/");

app.use(express.static(publicDirectoryPath));
app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
