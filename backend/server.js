const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// const uri = process.env.ATLAS_URI;
mongoose.connect("mongodb://localhost:27017/mernCRUD", { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const Gardian_Router = require("./routes/Gardian_Event");

app.use(Gardian_Router);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
