const express = require("express");
const path = require("path");
var cors = require("cors");
// const config = require("./server/config/config");
const defectsRouter = require("./server/routers/defects");

const port = process.env.PORT || 8080;
const publicDirectoryPath = path.join(__dirname, "./client/dist/");

const app = express();

app.use(cors());
app.use((req, res, next) => {
  const { method, path } = req;
  console.log(
    `New request to: ${method} ${path} at ${new Date().toISOString()}`
  );
  next();
});

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/defects", defectsRouter);
app.use("/", express.static(publicDirectoryPath));

// Start Server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
