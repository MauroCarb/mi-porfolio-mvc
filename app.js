const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const mainRouter = require("./routers/main");

const app = express();

app.listen(PORT, () => {
  console.log(`servidor funcionanando en ${PORT}`);
});

app.use(express.static("public"));

app.use("/", mainRouter);
